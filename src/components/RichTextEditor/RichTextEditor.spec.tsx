// /* (c) Copyright Frontify Ltd., all rights reserved. */

// import { getCanvasFontSize, getTextWidth } from "@components/RichTextEditor/utils/getTextWidth";
// import { mount } from "@cypress/react";
// import React, { FC, useState } from "react";
// import { RichTextEditorProps } from ".";
// import { textAlignClassMap, TextAlignTypes } from "./renderer/renderBlockStyles";
// import { classMap } from "./renderer/renderInlineStyles";
// import { ON_SAVE_DELAY_IN_MS, RichTextEditor, StyleElements, StyleMarks } from "./RichTextEditor";

// const RICH_TEXT_EDITOR = "[data-test-id=rich-text-editor]";
// const TOOLBAR = "[data-test-id=toolbar]";
// const PLACEHOLDER = "My placeholder";

// const getBlockStyleControl = (blockType: string) => `[data-test-id=block-style-button-${blockType}]`;
// const getInlineStyleControl = (style: string) => `[data-test-id=inline-style-button-${style}]`;
// const insertTextAndOpenToolbar = () => cy.get("[contenteditable=true]").click().type("hello{selectall}");

// const RichTextWithClearButton: FC<Pick<RichTextEditorProps, "value">> = ({ value }) => {
//     const [clear, setClear] = useState(false);

//     return (
//         <div>
//             <button onClick={() => setClear(true)}>clear</button>
//             <RichTextEditor value={value} clear={clear} />
//         </div>
//     );
// };

// describe("RichTextEditor Component", () => {
//     it("should render an empty rich text editor", () => {
//         mount(<RichTextEditor />);

//         cy.get(RICH_TEXT_EDITOR).should("be.visible");
//     });

//     it("should render a raw content state", () => {
//         const text = "This is some text that you can not edit";
//         mount(<RichTextEditor value={JSON.stringify([{ type: StyleElements.Paragraph, children: [{ text }] }])} />);

//         cy.get(RICH_TEXT_EDITOR).should("contain.text", text);
//     });

//     it("should render a raw html content state", () => {
//         mount(<RichTextEditor value={"<b>this is bold</b> and <i>this italic</i>"} />);

//         cy.get(RICH_TEXT_EDITOR).should("contain.text", "this is bold and this italic");
//         cy.get("[contenteditable=true]").should("include.html", classMap[StyleMarks.Bold]);
//         cy.get("[contenteditable=true]").should("include.html", classMap[StyleMarks.Italic]);
//     });

//     it("should be editable by default ", () => {
//         mount(<RichTextEditor />);

//         cy.get("[contenteditable=true]").should("exist");
//     });

//     it("should not the able to edit when readonly ", () => {
//         mount(<RichTextEditor readonly />);

//         cy.get("[contenteditable=false]").should("exist");
//     });

//     it("should type and insert text", () => {
//         mount(<RichTextEditor />);

//         cy.get("[contenteditable=true]").click().type("hello");
//     });

//     it("should display toolbar when selecting inserted text", () => {
//         mount(<RichTextEditor />);

//         insertTextAndOpenToolbar();
//         cy.get(TOOLBAR).should("exist");
//     });

//     it("should close toolbar on blur", () => {
//         mount(<RichTextEditor />);

//         insertTextAndOpenToolbar();
//         cy.get("[contenteditable=true]").blur();
//         cy.get(TOOLBAR).should("not.exist");
//     });

//     it("renders a bold text", () => {
//         mount(<RichTextEditor />);

//         insertTextAndOpenToolbar();
//         cy.get(getInlineStyleControl(StyleMarks.Bold)).click();
//         cy.get("[contenteditable=true]").should("include.html", classMap[StyleMarks.Bold]);
//     });

//     it("renders italic", () => {
//         mount(<RichTextEditor />);

//         insertTextAndOpenToolbar();
//         cy.get(getInlineStyleControl(StyleMarks.Italic)).click();
//         cy.get("[contenteditable=true]").should("include.html", classMap[StyleMarks.Italic]);
//     });

//     it("renders underline", () => {
//         mount(<RichTextEditor />);

//         insertTextAndOpenToolbar();
//         cy.get(getInlineStyleControl(StyleMarks.Underline)).click();
//         cy.get("[contenteditable=true]").should("include.html", classMap[StyleMarks.Underline]);
//     });

//     it("renders strikethrough", () => {
//         mount(<RichTextEditor />);

//         insertTextAndOpenToolbar();
//         cy.get(getInlineStyleControl(StyleMarks.Strikethrough)).click();
//         cy.get("[contenteditable=true]").should("include.html", classMap[StyleMarks.Strikethrough]);
//     });

//     it("renders code", () => {
//         mount(<RichTextEditor />);

//         insertTextAndOpenToolbar();
//         cy.get(getInlineStyleControl(StyleMarks.Code)).click();
//         cy.get("[contenteditable=true]").should("include.html", classMap[StyleMarks.Code]);
//     });

//     it("renders an ordered list", () => {
//         mount(<RichTextEditor />);

//         insertTextAndOpenToolbar();
//         cy.get(getBlockStyleControl("ordered-list")).click();
//         cy.get("[contenteditable=true]").should("include.html", "<ol");
//     });

//     it("renders an unordered list", () => {
//         mount(<RichTextEditor />);

//         insertTextAndOpenToolbar();
//         cy.get(getBlockStyleControl("unordered-list")).click();
//         cy.get("[contenteditable=true]").should("include.html", "<ul");
//     });

//     it("renders a right aligned text", () => {
//         mount(<RichTextEditor />);

//         insertTextAndOpenToolbar();
//         cy.get(getBlockStyleControl("paragraph-align-right")).click();
//         cy.get("[contenteditable=true]").should("include.html", textAlignClassMap[TextAlignTypes.AlignRight]);
//     });

//     it("render the placeholder with correct width", () => {
//         mount(
//             <div style={{ display: "inline-flex" }}>
//                 <RichTextEditor placeholder={PLACEHOLDER} />
//             </div>,
//         );

//         cy.get(RICH_TEXT_EDITOR).then(($element) => {
//             const expectedWidth = getTextWidth(PLACEHOLDER, getCanvasFontSize($element.get(0)));
//             expect(expectedWidth).to.be.equal($element.width());
//         });
//     });

//     it("emits onTextChange when choosing an inline style", () => {
//         const onTextChange = cy.stub();
//         mount(<RichTextEditor onTextChange={onTextChange} />);

//         insertTextAndOpenToolbar();
//         cy.get(getInlineStyleControl(StyleMarks.Bold))
//             .click()
//             .wait(ON_SAVE_DELAY_IN_MS)
//             .then(() => {
//                 expect(onTextChange).to.be.called; // succeeds
//             });
//     });

//     it("emits onTextChange when choosing a block style", () => {
//         const onTextChange = cy.stub();
//         mount(<RichTextEditor onTextChange={onTextChange} />);

//         insertTextAndOpenToolbar();
//         cy.get(getBlockStyleControl("ordered-list"))
//             .click()
//             .wait(ON_SAVE_DELAY_IN_MS)
//             .then(() => {
//                 expect(onTextChange).to.be.called; // succeeds
//             });
//     });

//     it("should clear editor content", () => {
//         const text = "This is some text";
//         mount(
//             <RichTextWithClearButton
//                 value={JSON.stringify([{ type: StyleElements.Paragraph, children: [{ text }] }])}
//             />,
//         );

//         cy.get(RICH_TEXT_EDITOR).should("contain.text", text);
//         cy.get("button").click();
//         cy.get(RICH_TEXT_EDITOR).should("contain.text", "");
//     });
// });
