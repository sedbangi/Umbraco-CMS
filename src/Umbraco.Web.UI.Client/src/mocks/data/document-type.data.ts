import { UmbEntityData } from './entity.data.js';
import { createDocumentTypeTreeItem } from './utils.js';
import {
	DocumentTypeTreeItemResponseModel,
	DocumentTypeResponseModel,
	ContentTypeCompositionTypeModel,
} from '@umbraco-cms/backoffice/backend-api';

export const data: Array<DocumentTypeResponseModel> = [
	{
		allowedTemplateIds: [],
		defaultTemplateId: null,
		id: 'all-property-editors-document-type-id',
		alias: 'blogPost',
		name: 'All property editors document type',
		description: null,
		icon: 'umb:item-arrangement',
		allowedAsRoot: true,
		variesByCulture: true,
		variesBySegment: false,
		isElement: false,
		properties: [
			{
				id: '1',
				containerId: 'all-properties-group-key',
				alias: 'richTextEditor',
				name: 'Rich Text editor',
				description: 'Some description to test with a long description.',
				dataTypeId: 'dt-richTextEditor',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '2',
				containerId: 'all-properties-group-id',
				alias: 'colorPicker',
				name: 'Color Picker',
				description: '',
				dataTypeId: 'dt-colorPicker',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '3',
				containerId: 'all-properties-group-key',
				alias: 'contentPicker',
				name: 'Content Picker',
				description: '',
				dataTypeId: 'dt-contentPicker',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '4',
				containerId: 'all-properties-group-key',
				alias: 'eyeDropper',
				name: 'Eye Dropper',
				description: '',
				dataTypeId: 'dt-eyeDropper',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '5',
				containerId: 'all-properties-group-key',
				alias: 'multiUrlPicker',
				name: 'Multi URL Picker',
				description: '',
				dataTypeId: 'dt-multiUrlPicker',
				variesByCulture: true,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '6',
				containerId: 'all-properties-group-key',
				alias: 'multiNodeTreePicker',
				name: 'Multi Node Tree Picker',
				description: '',
				dataTypeId: 'dt-multiNodeTreePicker',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '7',
				containerId: 'all-properties-group-key',
				alias: 'datePicker',
				name: 'Date Picker',
				description: '',
				dataTypeId: 'dt-datePicker',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '7b',
				containerId: 'all-properties-group-key',
				alias: 'datePicker-b',
				name: 'Date Picker With Time',
				description: '',
				dataTypeId: 'dt-datePicker-time',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '8',
				containerId: 'all-properties-group-key',
				alias: 'email',
				name: 'Email',
				description: '',
				dataTypeId: 'dt-email',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '9',
				containerId: 'all-properties-group-key',
				alias: 'textBox',
				name: 'Text Box',
				description: '',
				dataTypeId: 'dt-textBox',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '19',
				containerId: 'all-properties-group-key',
				alias: 'dropdown',
				name: 'Dropdown',
				description: '',
				dataTypeId: 'dt-dropdown',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '11',
				containerId: 'all-properties-group-key',
				alias: 'textArea',
				name: 'Text Area',
				description: '',
				dataTypeId: 'dt-textArea',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '12',
				containerId: 'all-properties-group-key',
				alias: 'slider',
				name: 'Slider',
				description: '',
				dataTypeId: 'dt-slider',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '13',
				containerId: 'all-properties-group-key',
				alias: 'toggle',
				name: 'Toggle',
				description: '',
				dataTypeId: 'dt-toggle',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '14',
				containerId: 'all-properties-group-key',
				alias: 'tags',
				name: 'Tags',
				description: '',
				dataTypeId: 'dt-tags',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '15',
				containerId: 'all-properties-group-key',
				alias: 'markdownEditor',
				name: 'MarkdownEditor',
				description: '',
				dataTypeId: 'dt-markdownEditor',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '16',
				containerId: 'all-properties-group-key',
				alias: 'radioButtonList',
				name: 'Radio Button List',
				description: '',
				dataTypeId: 'dt-radioButtonList',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '17',
				containerId: 'all-properties-group-key',
				alias: 'checkboxList',
				name: 'Checkbox List',
				description: '',
				dataTypeId: 'dt-checkboxList',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '18',
				containerId: 'all-properties-group-key',
				alias: 'blockList',
				name: 'Block List',
				description: '',
				dataTypeId: 'dt-blockList',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '19',
				containerId: 'all-properties-group-key',
				alias: 'mediaPicker',
				name: 'Media Picker',
				description: '',
				dataTypeId: 'dt-mediaPicker',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '20',
				containerId: 'all-properties-group-key',
				alias: 'imageCropper',
				name: 'Image Cropper',
				description: '',
				dataTypeId: 'dt-imageCropper',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '21',
				containerId: 'all-properties-group-key',
				alias: 'uploadField',
				name: 'Upload Field',
				description: '',
				dataTypeId: 'dt-uploadField',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '22',
				containerId: 'all-properties-group-key',
				alias: 'blockGrid',
				name: 'Block Grid',
				description: '',
				dataTypeId: 'dt-blockGrid',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '23',
				containerId: 'all-properties-group-key',
				alias: 'blockGrid',
				name: 'Icon Picker',
				description: '',
				dataTypeId: 'dt-iconPicker',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '27',
				containerId: 'all-properties-group-key',
				alias: 'label',
				name: 'Label',
				description: '',
				dataTypeId: 'dt-label',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '28',
				containerId: 'all-properties-group-key',
				alias: 'integer',
				name: 'Integer',
				description: '',
				dataTypeId: 'dt-integer',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '29',
				containerId: 'all-properties-group-key',
				alias: 'decimal',
				name: 'Decimal',
				description: '',
				dataTypeId: 'dt-decimal',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '30',
				containerId: 'all-properties-group-key',
				alias: 'memberPicker',
				name: 'Member Picker',
				description: '',
				dataTypeId: 'dt-memberPicker',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '31',
				containerId: 'all-properties-group-key',
				alias: 'memberGroupPicker',
				name: 'Member Group Picker',
				description: '',
				dataTypeId: 'dt-memberGroupPicker',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '32',
				containerId: 'all-properties-group-key',
				alias: 'userPicker',
				name: 'User Picker',
				description: '',
				dataTypeId: 'dt-userPicker',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
		],
		containers: [
			{
				id: 'all-properties-group-key',
				parentId: null,
				name: 'Content',
				type: 'Group',
				sortOrder: 0,
			},
		],
		allowedContentTypes: [],
		compositions: [],
		cleanup: {
			preventCleanup: false,
			keepAllVersionsNewerThanDays: null,
			keepLatestVersionPerDayForDays: null,
		},
	},
	{
		allowedTemplateIds: [],
		defaultTemplateId: null,
		id: 'simple-document-type-id',
		alias: 'blogPost',
		name: 'All property editors document type',
		description: null,
		icon: 'umb:item-arrangement',
		allowedAsRoot: true,
		variesByCulture: true,
		variesBySegment: false,
		isElement: false,
		properties: [
			{
				id: '6',
				containerId: 'all-properties-group-key',
				alias: 'multiNodeTreePicker',
				name: 'Multi Node Tree Picker',
				description: '',
				dataTypeId: 'dt-multiNodeTreePicker',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
		],
		containers: [
			{
				id: 'all-properties-group-key',
				parentId: null,
				name: 'Content',
				type: 'Group',
				sortOrder: 0,
			},
		],
		allowedContentTypes: [],
		compositions: [],
		cleanup: {
			preventCleanup: false,
			keepAllVersionsNewerThanDays: null,
			keepLatestVersionPerDayForDays: null,
		},
	},

	{
		allowedTemplateIds: [],
		defaultTemplateId: null,
		id: '29643452-cff9-47f2-98cd-7de4b6807681',
		alias: 'blogPost',
		name: 'Page Document Type',
		description: null,
		icon: 'umb:document',
		allowedAsRoot: true,
		variesByCulture: true,
		variesBySegment: false,
		isElement: false,
		properties: [
			{
				id: '5b4ca208-134e-4865-b423-06e5e97adf3c',
				containerId: 'c3cd2f12-b7c4-4206-8d8b-27c061589f75',
				alias: 'blogPostText',
				name: 'Blog Post Text',
				description: null,
				dataTypeId: '0cc0eba1-9960-42c9-bf9b-60e150b429ae',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: 'ef7096b6-7c9e-49ba-8d49-395111e65ea2',
				containerId: '227d6ed2-e118-4494-b8f2-deb69854a56a',
				alias: 'blogTextStringUnderMasterTab',
				name: 'Blog text string under master tab',
				description: null,
				dataTypeId: '0cc0eba1-9960-42c9-bf9b-60e150b429ae',
				variesByCulture: true,
				variesBySegment: false,
				validation: {
					mandatory: false,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: 'e010c429-b298-499a-9bfe-79687af8972a',
				containerId: '22177c49-ecba-4f2e-b7fa-3f2c04d02cfb',
				alias: 'blogTextStringUnderGroupUnderMasterTab',
				name: 'Blog text string under group under master tab',
				description: null,
				dataTypeId: '0cc0eba1-9960-42c9-bf9b-60e150b429ae',
				variesByCulture: true,
				variesBySegment: false,
				validation: {
					mandatory: false,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: '1a22749a-c7d2-44bb-b36b-c977c2ced6ef',
				containerId: '2c943997-b685-432d-a6c5-601d8e7a298a',
				alias: 'localBlogTabString',
				name: 'Local Blog Tab String',
				description: null,
				dataTypeId: '0cc0eba1-9960-42c9-bf9b-60e150b429ae',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: '^[0-9]*$',
					regExMessage: null,
				},
				appearance: {
					labelOnTop: true,
				},
			},
			{
				id: '22',
				containerId: '2c943997-b685-432d-a6c5-601d8e7a298a',
				alias: 'blockGrid',
				name: 'Block Grid',
				description: '',
				dataTypeId: 'dt-blockGrid',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
		],
		containers: [
			{
				id: 'c3cd2f12-b7c4-4206-8d8b-27c061589f75',
				parentId: null,
				name: 'Content-group',
				type: 'Group',
				sortOrder: 0,
			},
			{
				id: '227d6ed2-e118-4494-b8f2-deb69854a56a',
				parentId: null,
				name: 'Master Tab',
				type: 'Tab',
				sortOrder: 0,
			},
			{
				id: '22177c49-ecba-4f2e-b7fa-3f2c04d02cfb',
				parentId: '227d6ed2-e118-4494-b8f2-deb69854a56a',
				name: 'Blog Group under master tab',
				type: 'Group',
				sortOrder: 0,
			},
			{
				id: '2c943997-b685-432d-a6c5-601d8e7a298a',
				parentId: null,
				name: 'Local blog tab',
				type: 'Tab',
				sortOrder: 1,
			},
		],
		allowedContentTypes: [
			{
				id: '29643452-cff9-47f2-98cd-7de4b6807681',
				sortOrder: 0,
			},
		],
		compositions: [
			{
				id: '8f68ba66-6fb2-4778-83b8-6ab4ca3a7c5d',
				compositionType: ContentTypeCompositionTypeModel.INHERITANCE,
			},
			{
				id: '5035d7d9-0a63-415c-9e75-ee2cf931db92',
				compositionType: ContentTypeCompositionTypeModel.COMPOSITION,
			},
		],
		cleanup: {
			preventCleanup: false,
			keepAllVersionsNewerThanDays: null,
			keepLatestVersionPerDayForDays: null,
		},
	},
	{
		allowedTemplateIds: ['916cfecc-3295-490c-a16d-c41fa9f72980'],
		defaultTemplateId: '916cfecc-3295-490c-a16d-c41fa9f72980',
		id: '5035d7d9-0a63-415c-9e75-ee2cf931db92',
		alias: 'masterPage',
		name: 'Master Page',
		description: null,
		icon: 'umb:document',
		allowedAsRoot: false,
		variesByCulture: false,
		variesBySegment: false,
		isElement: false,
		properties: [
			{
				id: '5e5f7456-c751-4846-9f2b-47965cc96ec6',
				containerId: '6f281e5a-0242-4649-bd9e-d6bf87f92b41',
				alias: 'masterText',
				name: 'Master text',
				description: null,
				dataTypeId: '0cc0eba1-9960-42c9-bf9b-60e150b429ae',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: false,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
		],
		containers: [
			{
				id: '6f281e5a-0242-4649-bd9e-d6bf87f92b41',
				parentId: null,
				name: 'Master Tab',
				type: 'Tab',
				sortOrder: 0,
			},
		],
		allowedContentTypes: [],
		compositions: [],
		cleanup: {
			preventCleanup: false,
			keepAllVersionsNewerThanDays: null,
			keepLatestVersionPerDayForDays: null,
		},
	},
	{
		allowedTemplateIds: [],
		defaultTemplateId: null,
		id: '8f68ba66-6fb2-4778-83b8-6ab4ca3a7c5d',
		alias: 'baseElementType',
		name: 'Base Element Type',
		description: null,
		icon: 'umb:science',
		allowedAsRoot: false,
		variesByCulture: false,
		variesBySegment: false,
		isElement: true,
		properties: [
			{
				id: 'b92de6ac-1a22-4a45-a481-b6cae1cccbbf',
				containerId: '1e845ca8-1e3e-4b03-be1d-0b4149ce2129',
				alias: 'pageTitle',
				name: 'Page title',
				description: null,
				dataTypeId: '0cc0eba1-9960-42c9-bf9b-60e150b429ae',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: false,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
		],
		containers: [
			{
				id: '1e845ca8-1e3e-4b03-be1d-0b4149ce2129',
				parentId: null,
				name: 'Content-group',
				type: 'Group',
				sortOrder: 0,
			},
		],
		allowedContentTypes: [],
		compositions: [],
		cleanup: {
			preventCleanup: false,
			keepAllVersionsNewerThanDays: null,
			keepLatestVersionPerDayForDays: null,
		},
	},
	{
		allowedTemplateIds: [
			'2bf464b6-3aca-4388-b043-4eb439cc2643',
			'9a84c0b3-03b4-4dd4-84ac-706740ac0f71',
			'9a84c0b3-03b4-4dd4-84ac-706740ac0f72',
		],
		defaultTemplateId: '2bf464b6-3aca-4388-b043-4eb439cc2643',
		id: 'simple-document-type-key',
		alias: 'simpleDocumentType',
		name: 'Simple Document Type',
		description: null,
		icon: 'umb:document',
		allowedAsRoot: true,
		variesByCulture: false,
		variesBySegment: false,
		isElement: false,
		properties: [
			{
				id: '1680d4d2-cda8-4ac2-affd-a69fc10382b1',
				containerId: '341b8521-fd43-4333-ae7a-a10cbbc6f4b0',
				alias: 'prop1',
				name: 'Prop 1',
				description: null,
				dataTypeId: '0cc0eba1-9960-42c9-bf9b-60e150b429ae',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: false,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
		],
		containers: [
			{
				id: '341b8521-fd43-4333-ae7a-a10cbbc6f4b0',
				parentId: null,
				name: 'Content',
				type: 'Group',
				sortOrder: 0,
			},
		],
		allowedContentTypes: [
			{ id: 'simple-document-type-key', sortOrder: 0 },
			{ id: 'simple-document-type-2-key', sortOrder: 0 },
		],
		compositions: [],
		cleanup: {
			preventCleanup: false,
			keepAllVersionsNewerThanDays: null,
			keepLatestVersionPerDayForDays: null,
		},
	},
	{
		allowedTemplateIds: [],
		defaultTemplateId: null,
		id: 'simple-document-type-2-key',
		alias: 'simpleDocumentType2',
		name: 'Simple Document Type 2',
		description: null,
		icon: 'umb:document',
		allowedAsRoot: true,
		variesByCulture: false,
		variesBySegment: false,
		isElement: false,
		properties: [
			{
				id: '82d4b050-b128-42fe-ac8e-d5586e533592',
				containerId: 'b275052a-1868-4901-bc8c-2b35b78a9ab2',
				alias: 'prop1',
				name: 'Prop 1',
				description: null,
				dataTypeId: '0cc0eba1-9960-42c9-bf9b-60e150b429ae',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: false,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				id: 'beadc69a-d669-4d01-9919-98bafba31e57',
				containerId: 'b275052a-1868-4901-bc8c-2b35b78a9ab2',
				alias: 'prop2',
				name: 'Prop 2',
				description: null,
				dataTypeId: '0cc0eba1-9960-42c9-bf9b-60e150b429ae',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: false,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
		],
		containers: [
			{
				id: 'b275052a-1868-4901-bc8c-2b35b78a9ab2',
				parentId: null,
				name: 'Content',
				type: 'Group',
				sortOrder: 0,
			},
		],
		allowedContentTypes: [{ id: 'simple-document-type-key', sortOrder: 0 }],
		compositions: [],
		cleanup: {
			preventCleanup: false,
			keepAllVersionsNewerThanDays: null,
			keepLatestVersionPerDayForDays: null,
		},
	},
];

export const treeData: Array<DocumentTypeTreeItemResponseModel> = [
	{
		name: 'All property editors document type',
		type: 'document-type',
		hasChildren: false,
		id: 'all-property-editors-document-type-id',
		isContainer: false,
		parentId: null,
		icon: '',
	},
	{
		name: 'Simple document type',
		type: 'document-type',
		hasChildren: false,
		id: 'simple-document-type-id',
		isContainer: false,
		parentId: null,
		icon: '',
	},
	{
		name: 'Page Document Type',
		type: 'document-type',
		hasChildren: false,
		id: '29643452-cff9-47f2-98cd-7de4b6807681',
		isContainer: false,
		parentId: null,
		icon: 'umb:document',
	},
	{
		name: 'Page Document Type Compositional',
		type: 'document-type',
		hasChildren: false,
		id: '5035d7d9-0a63-415c-9e75-ee2cf931db92',
		isContainer: false,
		parentId: null,
		icon: 'umb:document',
	},
	{
		name: 'Page Document Type Inherited',
		type: 'document-type',
		hasChildren: false,
		id: '8f68ba66-6fb2-4778-83b8-6ab4ca3a7c5d',
		isContainer: false,
		parentId: null,
		icon: 'umb:document',
	},
	{
		name: 'Simple Document Type',
		type: 'document-type',
		hasChildren: false,
		id: 'simple-document-type-key',
		isContainer: false,
		parentId: null,
		icon: 'umb:document',
	},
	{
		name: 'Simple Document Type 2',
		type: 'document-type',
		hasChildren: false,
		id: 'simple-document-type-2-key',
		isContainer: false,
		parentId: null,
		icon: 'umb:document',
	},
];

// Temp mocked database
// TODO: all properties are optional in the server schema. I don't think this is correct.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
class UmbDocumentTypeData extends UmbEntityData<DocumentTypeResponseModel> {
	private treeData = treeData;

	constructor() {
		super(data);
	}

	// TODO: Can we do this smarter so we don't need to make this for each mock data:
	insert(item: DocumentTypeResponseModel) {
		const result = super.insert(item);
		this.treeData.push(createDocumentTypeTreeItem(result));
		return result;
	}

	update(id: string, item: DocumentTypeResponseModel) {
		const result = super.save(id, item);
		this.treeData = this.treeData.map((x) => {
			if (x.id === result.id) {
				return createDocumentTypeTreeItem(result);
			} else {
				return x;
			}
		});
		return result;
	}

	getTreeRoot(): Array<DocumentTypeTreeItemResponseModel> {
		const rootItems = this.treeData.filter((item) => item.parentId === null);
		const result = rootItems.map((item) => createDocumentTypeTreeItem(item));
		return result;
	}

	getTreeItemChildren(id: string): Array<DocumentTypeTreeItemResponseModel> {
		const childItems = this.treeData.filter((item) => item.parentId === id);
		return childItems.map((item) => item);
	}

	getTreeItem(ids: Array<string>): Array<DocumentTypeTreeItemResponseModel> {
		const items = this.treeData.filter((item) => ids.includes(item.id ?? ''));
		return items.map((item) => item);
	}

	getAllowedTypesOf(id: string): Array<DocumentTypeTreeItemResponseModel> {
		const documentType = this.getById(id);
		const allowedTypeKeys = documentType?.allowedContentTypes?.map((documentType) => documentType.id) ?? [];
		const items = this.treeData.filter((item) => allowedTypeKeys.includes(item.id ?? ''));
		return items.map((item) => item);
	}
}

export const umbDocumentTypeData = new UmbDocumentTypeData();
