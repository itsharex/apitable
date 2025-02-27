/**
 * Api Document
 * Backend_Server Api Document
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* Subscription information view for spaces
*/
export class InternalSpaceSubscriptionVo {
    /**
    * Maximum number of rows in a single table (unit: row)
    */
    'maxRowsPerSheet'?: number;
    /**
    * Maximum number of archived rows in a single table (unit: row)
    */
    'maxArchivedRowsPerSheet'?: number;
    /**
    * The maximum number of rows of the space station (unit: row)
    */
    'maxRowsInSpace'?: number;
    /**
    * Maximum number of album views (unit: pieces)
    */
    'maxGalleryViewsInSpace'?: number;
    /**
    * Maximum number of Kanban views (unit: pieces)
    */
    'maxKanbanViewsInSpace'?: number;
    /**
    * Maximum number of Gantt views (unit: pieces)
    */
    'maxGanttViewsInSpace'?: number;
    /**
    * Maximum number of calendar views (unit: pieces)
    */
    'maxCalendarViewsInSpace'?: number;
    /**
    * the maximum credit number for ai query(unit: int)
    */
    'maxMessageCredits'?: number;
    /**
    * Maximum number of widget of the space station
    */
    'maxWidgetNums'?: number;
    /**
    * Maximum number of automation runs of the space station
    */
    'maxAutomationRunsNums'?: number;
    /**
    * allow use embed
    */
    'allowEmbed'?: boolean;
    /**
    * allow use org api
    */
    'allowOrgApi'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "maxRowsPerSheet",
            "baseName": "maxRowsPerSheet",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "maxArchivedRowsPerSheet",
            "baseName": "maxArchivedRowsPerSheet",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "maxRowsInSpace",
            "baseName": "maxRowsInSpace",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "maxGalleryViewsInSpace",
            "baseName": "maxGalleryViewsInSpace",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "maxKanbanViewsInSpace",
            "baseName": "maxKanbanViewsInSpace",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "maxGanttViewsInSpace",
            "baseName": "maxGanttViewsInSpace",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "maxCalendarViewsInSpace",
            "baseName": "maxCalendarViewsInSpace",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "maxMessageCredits",
            "baseName": "maxMessageCredits",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "maxWidgetNums",
            "baseName": "maxWidgetNums",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "maxAutomationRunsNums",
            "baseName": "maxAutomationRunsNums",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "allowEmbed",
            "baseName": "allowEmbed",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "allowOrgApi",
            "baseName": "allowOrgApi",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InternalSpaceSubscriptionVo.attributeTypeMap;
    }

    public constructor() {
    }
}

