/**
 * Xero Projects API
 * This is the Xero Projects API
 *
 * The version of the OpenAPI document: 2.2.2
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class ProjectCreateOrUpdate {
    /**
    * Identifier of the contact this project was created for.
    */
    'contactId'?: string;
    /**
    * Name of the project.
    */
    'name': string;
    'estimateAmount'?: number;
    /**
    * Deadline for the project. UTC Date Time in ISO-8601 format.
    */
    'deadlineUtc'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "contactId",
            "baseName": "contactId",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "estimateAmount",
            "baseName": "estimateAmount",
            "type": "number"
        },
        {
            "name": "deadlineUtc",
            "baseName": "deadlineUtc",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return ProjectCreateOrUpdate.attributeTypeMap;
    }
}

