import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureApimanagementApimpolicydescriptions implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Apimanagement Apimpolicydescriptions',
                name: 'N8nDevAzureApimanagementApimpolicydescriptions',
                icon: { light: 'file:./azure-apimanagement-apimpolicydescriptions.png', dark: 'file:./azure-apimanagement-apimpolicydescriptions.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Use REST APIs to retrieve policy snippets from Azure API Management.',
                defaults: { name: 'Azure Apimanagement Apimpolicydescriptions' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureApimanagementApimpolicydescriptionsApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
