// import { Props as EditorProps } from './theme-components/editor';
// import RHFThemeEditor from './theme-components/editor/RHFThemeEditor';
// import { DefaultFormLabel } from '../labels/DefaultFormLabel';
// import { useFormContext } from 'react-hook-form';
// import Button from '@mui/material/Button';
// import { useState } from 'react';
// import TextAreaModal from '../modals/TextAreaModal';

// interface Props extends EditorProps {
//   name: string;
//   label: string;
//   rules?: any;
//   sourceHtmlDialogTitle?: string;
//   editRawHtmlButtonLabel?: string;
// }

// export default function RHFEditor({ name, label, rules, sourceHtmlDialogTitle, ...other }: Props) {
//   const { setValue, getValues } = useFormContext();
//   const [showSourceHtmlModal, setShowSourceHtmlModal] = useState(false);
//   const [modalHtml, setModalHtml] = useState('');

//   return (
//     <div>
//       <DefaultFormLabel>
//         {label}
//         <Button
//           onClick={() => {
//             setModalHtml(getValues(name) || '');
//             setShowSourceHtmlModal(true);
//           }}
//         >
//           {other.editRawHtmlButtonLabel || 'Click to edit raw HTML'}
//         </Button>
//       </DefaultFormLabel>
//       <RHFThemeEditor rules={rules} name={name} {...other} />

//       <TextAreaModal
//         dialogTitle={sourceHtmlDialogTitle || 'Source HTML'}
//         value={modalHtml}
//         valueUpdateCallback={(newValue) => {
//           setModalHtml(newValue);
//         }}
//         open={showSourceHtmlModal}
//         onOpen={() => setShowSourceHtmlModal(true)}
//         onClose={() => setShowSourceHtmlModal(false)}
//         onApply={() => {
//           setValue(name, modalHtml);
//           setShowSourceHtmlModal(false);
//         }}
//       />
//     </div>
//   );
// }
import React from "react";

export const RRHFEditor = () => {
  return <div>RRHFEditor</div>;
};
