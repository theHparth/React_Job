"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const getESLintCoreRule_1 = require("../util/getESLintCoreRule");
const util = __importStar(require("../util"));
const baseRule = (0, getESLintCoreRule_1.getESLintCoreRule)('no-dupe-class-members');
exports.default = util.createRule({
    name: 'no-dupe-class-members',
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow duplicate class members',
            recommended: false,
            extendsBaseRule: true,
        },
        hasSuggestions: baseRule.meta.hasSuggestions,
        schema: baseRule.meta.schema,
        messages: baseRule.meta.messages,
    },
    defaultOptions: [],
    create(context) {
        const rules = baseRule.create(context);
        function wrapMemberDefinitionListener(coreListener) {
            return (node) => {
                if (node.computed) {
                    return;
                }
                if (node.value &&
                    node.value.type === utils_1.AST_NODE_TYPES.TSEmptyBodyFunctionExpression) {
                    return;
                }
                return coreListener(node);
            };
        }
        return Object.assign(Object.assign(Object.assign({}, rules), (rules.MethodDefinition
            ? {
                MethodDefinition: wrapMemberDefinitionListener(rules.MethodDefinition),
            }
            : {})), (rules['MethodDefinition, PropertyDefinition']
            ? {
                'MethodDefinition, PropertyDefinition': wrapMemberDefinitionListener(rules['MethodDefinition, PropertyDefinition']),
            }
            : {}));
    },
});
//# sourceMappingURL=no-dupe-class-members.js.map