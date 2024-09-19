import{j as y}from"./jsx-runtime-Nms4Y4qS.js";import{r as p}from"./index-BwDkhjyp.js";import{E as S}from"./example-palettes-YFspyNAr.js";import{C as n}from"./ColorPickerFlyout-Bviu9ttI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./SegmentedControls-EyNzYqVo.js";import"./useFocusRing-Vzyl7-Lk.js";import"./SSRProvider-CYXx33DY.js";import"./useFocusable-wKuCPQI4.js";import"./chain-D5h1pgIF.js";import"./useFormValidationState-Bo5Bz1o-.js";import"./FocusScope-DegwnO3I.js";import"./useField-DuYpSm4Z.js";import"./useLabels-DH9bA-v0.js";import"./context-C2PaECDE.js";import"./VisuallyHidden-BM0TqGgS.js";import"./useControlledState-C0C-dzuH.js";import"./useMemoizedId-EtHZ7Sxa.js";import"./focusStyle-CBFElZiz.js";import"./merge-DI-veSMP.js";import"./motion-C48bHxkn.js";import"./colors-cqDZVL9s.js";import"./TextInput-Bg0oUMhx.js";import"./LoadingCircle-CZrma5le.js";import"./IconCheckMark-BVQYjlwc.js";import"./IconSize-BcCrF_mi.js";import"./IconEyeOff-BaqRyiPL.js";import"./IconCross-BUeQrH0h.js";import"./IconExclamationMarkTriangle-BucVSAOs.js";import"./IconExclamationMarkTriangle24-C3Ss9MHq.js";import"./validation-C9S5KgfE.js";import"./LegacyTooltip-D2Oc8Nam.js";import"./useLink-Bd1Qu62S.js";import"./usePopper-DPXU-o95.js";import"./index-DxjWwZXO.js";import"./index-CfyPTyT-.js";import"./Button-DqlvyMV-.js";import"./useButton-DFNFXdnN.js";import"./Portal-0C9N3MSP.js";import"./IconExclamationMarkCircle-BkFYjnTO.js";import"./IconExclamationMarkCircle24-ChDY1Cve.js";import"./IconStackVertical-pY154R4N.js";import"./IconMagnifier-B168s2sQ.js";import"./IconMagnifier16-COAs_fH7.js";import"./index-YYnwjzoa.js";import"./Dropdown-D6FNcki_.js";import"./useOverlayTriggerState-CAIlDegc.js";import"./useMenuTrigger-DMj9aqvz.js";import"./useLocalizedStringFormatter-D7Kogc_3.js";import"./helper-D04cnCVp.js";import"./isScrollable-Bts8_1NI.js";import"./SelectionManager-C_gdLktp.js";import"./MenuItem-Br_a5P6Q.js";import"./IconCaretRight-BUEYSaCS.js";import"./elements-BOYmskOL.js";import"./Trigger-CcP8S0KO.js";import"./IconCaretDown-C-LXN2Z7.js";import"./IconCaretDown16-Bqoo7UzD.js";import"./IconTrashBin-ruSc1bNE.js";import"./IconTrashBin16-D8pYIjKc.js";import"./IconTrashBin24-DrDNK9RT.js";import"./EnablePortalWrapper-DvpkRq0I.js";import"./Flyout-C7orzYWi.js";import"./getVerticalPositioning-CXY_GBne.js";import"./useDialog-BeiZRcOL.js";import"./Badge-DCccyOuc.js";import"./FieldsetHeader-DnziUXB0.js";import"./Switch-O77c4Oge.js";import"./InputLabel-DrkD0R8a.js";import"./TooltipIcon-C8fsnENL.js";import"./IconQuestionMarkCircle-CMNESB9s.js";import"./IconMinus-BhxphMyC.js";import"./IconMinus16-ChDakrvn.js";import"./IconPlus-_dPCTyDn.js";import"./IconPlus16-xrjAMgl7.js";import"./IconDroplet-CO3iIcGm.js";const wo={title:"Components/Color Picker/Flyout",component:n,tags:["autodocs"],args:{disabled:!1,currentColor:null,clearable:!1},argTypes:{onDelete:{action:"onDelete"}}},o=({disabled:s,currentColor:a,clearable:c,onDelete:C})=>{const[t,r]=p.useState(null),[u,e]=p.useState(a);return y.jsx(n,{disabled:s,clearable:c,currentColor:t??u,onClick:()=>e(t),onClose:()=>r(null),onSelect:d=>r(d),palettes:S,onClear:()=>{r(null),e(null)},onDelete:C})};o.__docgenInfo={description:"",methods:[],displayName:"Flyout"};var m,l,i;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`({
  disabled,
  currentColor,
  clearable,
  onDelete
}) => {
  const [temporaryColor, setTemporaryColor] = useState<Color | null>(null);
  const [selectedColor, setSelectedColor] = useState<Color | null>(currentColor);
  return <ColorPickerFlyoutComponent disabled={disabled} clearable={clearable} currentColor={temporaryColor ?? selectedColor} onClick={() => setSelectedColor(temporaryColor)} onClose={() => setTemporaryColor(null)} onSelect={color => setTemporaryColor(color)} palettes={EXAMPLE_PALETTES} onClear={() => {
    setTemporaryColor(null);
    setSelectedColor(null);
  }} onDelete={onDelete} />;
}`,...(i=(l=o.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const zo=["Flyout"];export{o as Flyout,zo as __namedExportsOrder,wo as default};
