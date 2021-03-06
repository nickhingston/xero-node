/**
 * Xero Payroll AU
 * This is the Xero Payroll API for orgs in Australia region.
 *
 * The version of the OpenAPI document: 2.2.2
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SuperFundProduct } from '././superFundProduct';

export class SuperFundProducts {
    'superFundProducts'?: Array<SuperFundProduct>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "superFundProducts",
            "baseName": "SuperFundProducts",
            "type": "Array<SuperFundProduct>"
        }    ];

    static getAttributeTypeMap() {
        return SuperFundProducts.attributeTypeMap;
    }
}

