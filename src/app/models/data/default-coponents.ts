import { ExtendedComponentSchema } from "formiojs";


export const defaultBookingComponents: ExtendedComponentSchema[] = [
  [
    {
      "label": "Columns",
      "columns": [
        {
          "components": [
            {
              "label": "First Name",
              "labelPosition": "left-left",
              "placeholder": "",
              "description": "",
              "tooltip": "",
              "prefix": "",
              "suffix": "",
              "widget": {
                "type": "input"
              },
              "inputMask": "",
              "displayMask": "",
              "allowMultipleMasks": false,
              "customClass": "form-control form-control-lg form-control-solid",
              "tabindex": "",
              "autocomplete": "",
              "hidden": false,
              "hideLabel": false,
              "showWordCount": false,
              "showCharCount": false,
              "mask": false,
              "autofocus": false,
              "spellcheck": true,
              "disabled": false,
              "tableView": true,
              "modalEdit": false,
              "multiple": false,
              "defaultValue": "",
              "persistent": true,
              "inputFormat": "plain",
              "protected": false,
              "dbIndex": false,
              "case": "",
              "truncateMultipleSpaces": false,
              "encrypted": false,
              "redrawOn": "",
              "clearOnHide": true,
              "customDefaultValue": "",
              "calculateValue": "",
              "calculateServer": false,
              "allowCalculateOverride": false,
              "validateOn": "change",
              "validate": {
                "required": true,
                "pattern": "",
                "customMessage": "",
                "custom": "",
                "customPrivate": false,
                "json": "",
                "minLength": "",
                "maxLength": "",
                "strictDateValidation": false,
                "multiple": false,
                "unique": false
              },
              "unique": false,
              "errorLabel": "",
              "errors": "",
              "key": "firstName",
              "tags": [],
              "properties": {},
              "conditional": {
                "show": null,
                "when": null,
                "eq": "",
                "json": ""
              },
              "customConditional": "",
              "logic": [],
              "attributes": {},
              "overlay": {
                "style": "",
                "page": "",
                "left": "",
                "top": "",
                "width": "",
                "height": ""
              },
              "type": "textfield",
              "input": true,
              "refreshOn": "",
              "dataGridLabel": false,
              "addons": [],
              "inputType": "text",
              "id": "egcspx5"
            }
          ],
          "width": 6,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "size": "md",
          "currentWidth": 6
        },
        {
          "components": [
            {
              "label": "Last Name",
              "labelPosition": "left-left",
              "placeholder": "",
              "description": "",
              "tooltip": "",
              "prefix": "",
              "suffix": "",
              "widget": {
                "type": "input"
              },
              "inputMask": "",
              "displayMask": "",
              "allowMultipleMasks": false,
              "customClass": "form-control form-control-lg form-control-solid",
              "tabindex": "",
              "autocomplete": "",
              "hidden": false,
              "hideLabel": false,
              "showWordCount": false,
              "showCharCount": false,
              "mask": false,
              "autofocus": false,
              "spellcheck": true,
              "disabled": false,
              "tableView": true,
              "modalEdit": false,
              "multiple": false,
              "defaultValue": "",
              "persistent": true,
              "inputFormat": "plain",
              "protected": false,
              "dbIndex": false,
              "case": "",
              "truncateMultipleSpaces": false,
              "encrypted": false,
              "redrawOn": "",
              "clearOnHide": true,
              "customDefaultValue": "",
              "calculateValue": "",
              "calculateServer": false,
              "allowCalculateOverride": false,
              "validateOn": "change",
              "validate": {
                "required": true,
                "pattern": "",
                "customMessage": "",
                "custom": "",
                "customPrivate": false,
                "json": "",
                "minLength": "",
                "maxLength": "",
                "strictDateValidation": false,
                "multiple": false,
                "unique": false
              },
              "unique": false,
              "errorLabel": "",
              "errors": "",
              "key": "lastName",
              "tags": [],
              "properties": {},
              "conditional": {
                "show": null,
                "when": null,
                "eq": "",
                "json": ""
              },
              "customConditional": "",
              "logic": [],
              "attributes": {},
              "overlay": {
                "style": "",
                "page": "",
                "left": "",
                "top": "",
                "width": "",
                "height": ""
              },
              "type": "textfield",
              "input": true,
              "refreshOn": "",
              "dataGridLabel": false,
              "addons": [],
              "inputType": "text",
              "id": "ejgzj3l"
            }
          ],
          "width": 6,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "size": "md",
          "currentWidth": 6
        }
      ],
      "autoAdjust": true,
      "customClass": "border-0",
      "hidden": false,
      "hideLabel": false,
      "modalEdit": false,
      "key": "columns",
      "tags": [],
      "properties": {},
      "conditional": {
        "show": null,
        "when": null,
        "eq": "",
        "json": ""
      },
      "customConditional": "",
      "logic": [],
      "attributes": {},
      "overlay": {
        "style": "",
        "page": "",
        "left": "",
        "top": "",
        "width": "",
        "height": ""
      },
      "type": "columns",
      "input": false,
      "tableView": false,
      "placeholder": "",
      "prefix": "",
      "suffix": "",
      "multiple": false,
      "defaultValue": null,
      "protected": false,
      "unique": false,
      "persistent": false,
      "clearOnHide": false,
      "refreshOn": "",
      "redrawOn": "",
      "dataGridLabel": false,
      "labelPosition": "top",
      "description": "",
      "errorLabel": "",
      "tooltip": "",
      "tabindex": "",
      "disabled": false,
      "autofocus": false,
      "dbIndex": false,
      "customDefaultValue": "",
      "calculateValue": "",
      "calculateServer": false,
      "widget": null,
      "validateOn": "change",
      "validate": {
        "required": false,
        "custom": "",
        "customPrivate": false,
        "strictDateValidation": false,
        "multiple": false,
        "unique": false
      },
      "allowCalculateOverride": false,
      "encrypted": false,
      "showCharCount": false,
      "showWordCount": false,
      "allowMultipleMasks": false,
      "addons": [],
      "tree": false,
      "lazyLoad": false,
      "id": "ermdps6"
    },
    {
      "label": "Email",
      "labelPosition": "left-left",
      "placeholder": "Email",
      "description": "",
      "tooltip": "",
      "prefix": "",
      "suffix": "",
      "widget": {
        "type": "input"
      },
      "displayMask": "",
      "customClass": "form-control form-control-lg form-control-solid",
      "tabindex": "",
      "autocomplete": "",
      "hidden": false,
      "hideLabel": false,
      "mask": false,
      "autofocus": false,
      "disabled": false,
      "tableView": false,
      "modalEdit": false,
      "multiple": false,
      "defaultValue": "",
      "persistent": true,
      "delimiter": false,
      "requireDecimal": false,
      "inputFormat": "plain",
      "protected": false,
      "dbIndex": false,
      "truncateMultipleSpaces": false,
      "encrypted": false,
      "redrawOn": "",
      "clearOnHide": true,
      "customDefaultValue": "",
      "calculateValue": "",
      "calculateServer": false,
      "allowCalculateOverride": false,
      "validateOn": "change",
      "validate": {
        "required": true,
        "customMessage": "",
        "custom": "",
        "customPrivate": false,
        "json": "",
        "min": "",
        "max": "",
        "strictDateValidation": false,
        "multiple": false,
        "unique": false,
        "step": "any",
        "integer": ""
      },
      "errorLabel": "",
      "errors": "",
      "key": "number",
      "tags": [],
      "properties": {},
      "conditional": {
        "show": null,
        "when": null,
        "eq": "",
        "json": ""
      },
      "customConditional": "",
      "logic": [],
      "attributes": {},
      "overlay": {
        "style": "",
        "page": "",
        "left": "",
        "top": "",
        "width": "",
        "height": ""
      },
      "type": "number",
      "input": true,
      "unique": false,
      "refreshOn": "",
      "dataGridLabel": false,
      "showCharCount": false,
      "showWordCount": false,
      "allowMultipleMasks": false,
      "addons": [],
      "id": "egb5kod"
    },
    {
      "label": "Contact Phone",
      "labelPosition": "left-left",
      "placeholder": "Phone Number",
      "description": "",
      "tooltip": "",
      "prefix": "",
      "suffix": "",
      "widget": {
        "type": "input"
      },
      "displayMask": "",
      "customClass": "form-control form-control-md form-control-solid",
      "tabindex": "",
      "autocomplete": "",
      "hidden": false,
      "hideLabel": false,
      "mask": false,
      "autofocus": false,
      "disabled": false,
      "tableView": false,
      "modalEdit": false,
      "multiple": false,
      "defaultValue": "",
      "persistent": true,
      "delimiter": false,
      "requireDecimal": false,
      "inputFormat": "plain",
      "protected": false,
      "dbIndex": false,
      "truncateMultipleSpaces": false,
      "encrypted": false,
      "redrawOn": "",
      "clearOnHide": true,
      "customDefaultValue": "",
      "calculateValue": "",
      "calculateServer": false,
      "allowCalculateOverride": false,
      "validateOn": "change",
      "validate": {
        "required": true,
        "customMessage": "",
        "custom": "",
        "customPrivate": false,
        "json": "",
        "min": "",
        "max": "",
        "strictDateValidation": false,
        "multiple": false,
        "unique": false,
        "step": "any",
        "integer": ""
      },
      "errorLabel": "",
      "errors": "",
      "key": "contactPhone",
      "tags": [],
      "properties": {},
      "conditional": {
        "show": null,
        "when": null,
        "eq": "",
        "json": ""
      },
      "customConditional": "",
      "logic": [],
      "attributes": {},
      "overlay": {
        "style": "",
        "page": "",
        "left": "",
        "top": "",
        "width": "",
        "height": ""
      },
      "type": "number",
      "input": true,
      "unique": false,
      "refreshOn": "",
      "dataGridLabel": false,
      "showCharCount": false,
      "showWordCount": false,
      "allowMultipleMasks": false,
      "addons": [],
      "id": "edb3pl9"
    },
    {
      "label": "Occupation",
      "labelPosition": "left-left",
      "placeholder": "Your occupation",
      "description": "",
      "tooltip": "",
      "prefix": "",
      "suffix": "",
      "widget": {
        "type": "input"
      },
      "inputMask": "",
      "displayMask": "",
      "allowMultipleMasks": false,
      "customClass": "form-control form-control-lg form-control-solid",
      "tabindex": "",
      "autocomplete": "",
      "hidden": false,
      "hideLabel": false,
      "showWordCount": false,
      "showCharCount": false,
      "mask": false,
      "autofocus": false,
      "spellcheck": true,
      "disabled": false,
      "tableView": true,
      "modalEdit": false,
      "multiple": false,
      "defaultValue": "",
      "persistent": true,
      "inputFormat": "plain",
      "protected": false,
      "dbIndex": false,
      "case": "",
      "truncateMultipleSpaces": false,
      "encrypted": false,
      "redrawOn": "",
      "clearOnHide": true,
      "customDefaultValue": "",
      "calculateValue": "",
      "calculateServer": false,
      "allowCalculateOverride": false,
      "validateOn": "change",
      "validate": {
        "required": true,
        "pattern": "",
        "customMessage": "",
        "custom": "",
        "customPrivate": false,
        "json": "",
        "minLength": "",
        "maxLength": "",
        "strictDateValidation": false,
        "multiple": false,
        "unique": false
      },
      "unique": false,
      "errorLabel": "",
      "errors": "",
      "key": "occupation",
      "tags": [],
      "properties": {},
      "conditional": {
        "show": null,
        "when": null,
        "eq": "",
        "json": ""
      },
      "customConditional": "",
      "logic": [],
      "attributes": {},
      "overlay": {
        "style": "",
        "page": "",
        "left": "",
        "top": "",
        "width": "",
        "height": ""
      },
      "type": "textfield",
      "input": true,
      "refreshOn": "",
      "dataGridLabel": false,
      "addons": [],
      "inputType": "text",
      "id": "ezbswnf"
    },
    {
      "label": "Preferred Communcation",
      "labelPosition": "left-left",
      "optionsLabelPosition": "right",
      "description": "",
      "tooltip": "",
      "customClass": "form-control  form-control-solid",
      "tabindex": "",
      "inline": true,
      "hidden": false,
      "hideLabel": false,
      "autofocus": false,
      "disabled": false,
      "tableView": false,
      "modalEdit": false,
      "defaultValue": {
        "email": true,
        "phone": false,
        "text": false
      },
      "values": [
        {
          "label": "Email",
          "value": "email",
          "shortcut": ""
        },
        {
          "label": "Phone",
          "value": "phone",
          "shortcut": ""
        },
        {
          "label": "Text",
          "value": "text",
          "shortcut": ""
        }
      ],
      "persistent": true,
      "protected": false,
      "dbIndex": false,
      "encrypted": false,
      "redrawOn": "",
      "clearOnHide": true,
      "customDefaultValue": "",
      "calculateValue": "",
      "calculateServer": false,
      "allowCalculateOverride": false,
      "validate": {
        "required": false,
        "onlyAvailableItems": false,
        "customMessage": "",
        "custom": "",
        "customPrivate": false,
        "json": "",
        "strictDateValidation": false,
        "multiple": false,
        "unique": false
      },
      "errorLabel": "",
      "minSelectedCountMessage": "",
      "maxSelectedCountMessage": "",
      "errors": "",
      "key": "selectBoxes",
      "tags": [],
      "properties": {},
      "conditional": {
        "show": null,
        "when": null,
        "eq": "",
        "json": ""
      },
      "customConditional": "",
      "logic": [],
      "attributes": {},
      "overlay": {
        "style": "",
        "page": "",
        "left": "",
        "top": "",
        "width": "",
        "height": ""
      },
      "type": "selectboxes",
      "labelWidth": 32,
      "input": true,
      "inputType": "checkbox",
      "placeholder": "",
      "prefix": "",
      "suffix": "",
      "multiple": false,
      "unique": false,
      "refreshOn": "",
      "dataGridLabel": false,
      "widget": null,
      "validateOn": "change",
      "showCharCount": false,
      "showWordCount": false,
      "allowMultipleMasks": false,
      "addons": [],
      "fieldSet": false,
      "id": "eler6u1"
    }
  ]
]
