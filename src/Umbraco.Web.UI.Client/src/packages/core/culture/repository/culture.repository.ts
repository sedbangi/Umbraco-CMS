import { UmbCultureServerDataSource } from './sources/culture.server.data.js';
import { UmbBaseController, type UmbControllerHost } from '@umbraco-cms/backoffice/controller-api';
import { type ExtensionApi } from '@umbraco-cms/backoffice/extension-api';

export class UmbCultureRepository extends UmbBaseController implements ExtensionApi {
	
	#dataSource: UmbCultureServerDataSource;

	constructor(host: UmbControllerHost) {
		super(host);

		this.#dataSource = new UmbCultureServerDataSource(this);

	}

	requestCultures({ skip, take } = { skip: 0, take: 1000 }) {
		return this.#dataSource.getCollection({ skip, take });
	}

	destroy() {

	}
}
