import * as vscode from 'vscode';

import DocDescFeature from './hovaDocs';

const docs: Record<string, vscode.MarkdownString> = {

    anvil: new vscode.MarkdownString(DocDescFeature.anvil),
    atomic: new vscode.MarkdownString(DocDescFeature.atomic),
    ore: new vscode.MarkdownString(DocDescFeature.ore),
    cave: new vscode.MarkdownString(DocDescFeature.cave),
    

    spark: new vscode.MarkdownString(DocDescFeature.spark),
    atom: new vscode.MarkdownString(DocDescFeature.atom),
    seal: new vscode.MarkdownString(DocDescFeature.seal),
    

    mark: new vscode.MarkdownString(DocDescFeature.mark),
    reject: new vscode.MarkdownString(DocDescFeature.reject),

    emit: new vscode.MarkdownString(DocDescFeature.emit),
    visual: new vscode.MarkdownString(DocDescFeature.visual),
    hideConfig: new vscode.MarkdownString(DocDescFeature.hideConfig),
    hideAtomic: new vscode.MarkdownString(DocDescFeature.hideAtomic),
    outDir: new vscode.MarkdownString(DocDescFeature.outDir),
    creator: new vscode.MarkdownString(DocDescFeature.creator),
    dimension: new vscode.MarkdownString(DocDescFeature.dimension),

    // types
    str: new vscode.MarkdownString(DocDescFeature.str),
    int: new vscode.MarkdownString(DocDescFeature.int),
    float: new vscode.MarkdownString(DocDescFeature.float),
    bool: new vscode.MarkdownString(DocDescFeature.bool),
    sufx: new vscode.MarkdownString(DocDescFeature.sufx),
    list: new vscode.MarkdownString(DocDescFeature.list),
}


Object.values(docs).forEach(kw => kw.isTrusted = true)


function ReadHoverInformations(context: vscode.ExtensionContext)
{
    const provider = vscode.languages.registerHoverProvider(
        { scheme: 'file', language: 'hova' },
        {
            provideHover(document, position) {
                const range = document.getWordRangeAtPosition(position)
                const word = document.getText(range)

                if (docs[word])
                {
                    return new vscode.Hover(docs[word], range)
                }

                return null
            }
        }
    )

    context.subscriptions.push(provider)
}


export function activate(context: vscode.ExtensionContext) {
    ReadHoverInformations(context)
}


export function deactivate() {
}

