"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
const hovaDocs_1 = __importDefault(require("./hovaDocs"));
const docs = {
    anvil: new vscode.MarkdownString(hovaDocs_1.default.anvil),
    atomic: new vscode.MarkdownString(hovaDocs_1.default.atomic),
    ore: new vscode.MarkdownString(hovaDocs_1.default.ore),
    cave: new vscode.MarkdownString(hovaDocs_1.default.cave),
    spark: new vscode.MarkdownString(hovaDocs_1.default.spark),
    atom: new vscode.MarkdownString(hovaDocs_1.default.atom),
    seal: new vscode.MarkdownString(hovaDocs_1.default.seal),
    mark: new vscode.MarkdownString(hovaDocs_1.default.mark),
    reject: new vscode.MarkdownString(hovaDocs_1.default.reject),
    emit: new vscode.MarkdownString(hovaDocs_1.default.emit),
    visual: new vscode.MarkdownString(hovaDocs_1.default.visual),
    hideConfig: new vscode.MarkdownString(hovaDocs_1.default.hideConfig),
    hideAtomic: new vscode.MarkdownString(hovaDocs_1.default.hideAtomic),
    outDir: new vscode.MarkdownString(hovaDocs_1.default.outDir),
    creator: new vscode.MarkdownString(hovaDocs_1.default.creator),
    dimension: new vscode.MarkdownString(hovaDocs_1.default.dimension),
    // types
    str: new vscode.MarkdownString(hovaDocs_1.default.str),
    int: new vscode.MarkdownString(hovaDocs_1.default.int),
    float: new vscode.MarkdownString(hovaDocs_1.default.float),
    bool: new vscode.MarkdownString(hovaDocs_1.default.bool),
    sufx: new vscode.MarkdownString(hovaDocs_1.default.sufx),
    list: new vscode.MarkdownString(hovaDocs_1.default.list),
};
Object.values(docs).forEach(kw => kw.isTrusted = true);
function ReadHoverInformations(context) {
    const provider = vscode.languages.registerHoverProvider({ scheme: 'file', language: 'hova' }, {
        provideHover(document, position) {
            const range = document.getWordRangeAtPosition(position);
            const word = document.getText(range);
            if (docs[word]) {
                return new vscode.Hover(docs[word], range);
            }
            return null;
        }
    });
    context.subscriptions.push(provider);
}
function activate(context) {
    ReadHoverInformations(context);
}
function deactivate() {
}
//# sourceMappingURL=extension.js.map