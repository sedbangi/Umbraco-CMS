import type { UmbMemberGroupDetailModel } from '../../types.js';
import { UmbContextToken } from '@umbraco-cms/backoffice/context-api';
import { UmbDetailStoreBase } from '@umbraco-cms/backoffice/store';
import type { UmbControllerHostElement } from '@umbraco-cms/backoffice/controller-api';

/**
 * @export
 * @class UmbMemberGroupDetailStore
 * @extends {UmbStoreBase}
 * @description - Data Store for Member Group Details
 */
export class UmbMemberGroupDetailStore extends UmbDetailStoreBase<UmbMemberGroupDetailModel> {
	/**
	 * Creates an instance of UmbMemberGroupDetailStore.
	 * @param {UmbControllerHostElement} host
	 * @memberof UmbMemberGroupDetailStore
	 */
	constructor(host: UmbControllerHostElement) {
		super(host, UMB_MEMBER_GROUP_DETAIL_STORE_CONTEXT.toString());
	}
}

export const UMB_MEMBER_GROUP_DETAIL_STORE_CONTEXT = new UmbContextToken<UmbMemberGroupDetailStore>(
	'UmbMemberGroupDetailStore',
);
