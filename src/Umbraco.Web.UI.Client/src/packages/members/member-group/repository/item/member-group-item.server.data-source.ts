import type { UmbMemberGroupItemModel } from './types.js';
import { UmbItemServerDataSourceBase } from '@umbraco-cms/backoffice/repository';
import type { MemberGroupItemResponseModel } from '@umbraco-cms/backoffice/backend-api';
import { MemberGroupResource } from '@umbraco-cms/backoffice/backend-api';
import type { UmbControllerHost } from '@umbraco-cms/backoffice/controller-api';

/**
 * A server data source for Member Group items
 * @export
 * @class UmbMemberGroupItemServerDataSource
 * @implements {DocumentTreeDataSource}
 */
export class UmbMemberGroupItemServerDataSource extends UmbItemServerDataSourceBase<
	MemberGroupItemResponseModel,
	UmbMemberGroupItemModel
> {
	/**
	 * Creates an instance of UmbMemberGroupItemServerDataSource.
	 * @param {UmbControllerHost} host
	 * @memberof UmbMemberGroupItemServerDataSource
	 */
	constructor(host: UmbControllerHost) {
		super(host, {
			getItems,
			mapper,
		});
	}
}

/* eslint-disable local-rules/no-direct-api-import */
const getItems = (uniques: Array<string>) => MemberGroupResource.getItemMemberGroup({ id: uniques });

const mapper = (item: MemberGroupItemResponseModel): UmbMemberGroupItemModel => {
	return {
		unique: item.id,
		name: item.name,
		propertyEditorUiAlias: item.editorUiAlias || '', // TODO: why can this be undefined or null on the server?
	};
};
