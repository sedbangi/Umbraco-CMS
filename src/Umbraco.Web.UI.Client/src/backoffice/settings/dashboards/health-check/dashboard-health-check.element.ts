import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { IRoute, IRoutingInfo } from 'router-slot';
import { UmbDashboardHealthCheckGroupElement } from './views/health-check-group.element';
import { UmbHealthCheckDashboardContext } from './health-check-dashboard.context';
import { UmbHealthCheckContext } from './health-check.context';
import { UmbLitElement } from '@umbraco-cms/element';
import { ManifestHealthCheck } from '@umbraco-cms/extensions-registry';
import { umbExtensionsRegistry } from '@umbraco-cms/extensions-api';
import { tryExecuteAndNotify } from '@umbraco-cms/resources';
import { HealthCheckGroup, HealthCheckResource } from '@umbraco-cms/backend-api';

@customElement('umb-dashboard-health-check')
export class UmbDashboardHealthCheckElement extends UmbLitElement {
	@state()
	private _routes: IRoute[] = [
		{
			path: `/:groupName`,
			component: () => import('./views/health-check-group.element'),
			setup: (component: HTMLElement, info: IRoutingInfo) => {
				const element = component as UmbDashboardHealthCheckGroupElement;
				element.groupName = decodeURI(info.match.params.groupName);
			},
		},
		{
			path: ``,
			component: () => import('./views/health-check-overview.element'),
		},
	];

	private _healthCheckManifests: ManifestHealthCheck[] = [];

	connectedCallback(): void {
		super.connectedCallback();
		umbExtensionsRegistry.extensionsOfType('healthCheck').subscribe((healthChecks) => {
			this._healthCheckManifests = healthChecks;
			this.provideContext(
				'umbHealthCheckDashboard',
				new UmbHealthCheckDashboardContext(this, this._healthCheckManifests)
			);
		});
	}

	protected firstUpdated() {
		this.#registerHealthChecks();
	}

	#registerHealthChecks = async () => {
		const { data } = await tryExecuteAndNotify(this, HealthCheckResource.getHealthCheckGroup({ skip: 0, take: 9999 }));
		if (!data) return;
		const manifests = this.#createManifests(data.items);
		this.#register(manifests);
	};

	#createManifests(groups: HealthCheckGroup[]): Array<ManifestHealthCheck> {
		return groups.map((group) => {
			return {
				type: 'healthCheck',
				alias: `Umb.HealthCheck.${group.name?.replace(/\s+/g, '') || ''}`,
				name: `${group.name} Health Check`,
				weight: 500,
				meta: {
					label: group.name || '',
					api: UmbHealthCheckContext,
				},
			};
		});
	}

	#register(manifests: Array<ManifestHealthCheck>) {
		manifests.forEach((manifest) => {
			if (umbExtensionsRegistry.isRegistered(manifest.alias)) return;
			umbExtensionsRegistry.register(manifest);
		});
	}

	render() {
		return html` <router-slot .routes=${this._routes}></router-slot>`;
	}
}

export default UmbDashboardHealthCheckElement;

declare global {
	interface HTMLElementTagNameMap {
		'umb-dashboard-health-check': UmbDashboardHealthCheckElement;
	}
}
