'use strict';


//  defaults write ~/Library/Preferences/com.bohemiancoding.sketch3.plist AlwaysReloadScript -bool YES

function copy_text(txt){
    var pasteBoard = [NSPasteboard generalPasteboard]
    [pasteBoard declareTypes:[NSArray arrayWithObject:NSPasteboardTypeString] owner:nil]
    [pasteBoard setString:txt forType:NSPasteboardTypeString]
}


function onRun(context) {
    var sketch = context.api();
    var selection = context.selection;
    var doc = context.document;

    if (selection.length > 1) {
        doc.showMessage('[plugin:copy-objectID] Please select only one layer!');
    }

    var layer = selection.firstObject();
    var oid = layer.objectID();
    var name = layer.name();

    copy_text(oid);
    doc.showMessage("Copied " + name + "'s ID");
}
