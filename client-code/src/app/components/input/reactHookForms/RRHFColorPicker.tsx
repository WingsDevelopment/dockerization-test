import React from "react";

export const RRHFColorPicker = () => {
  return <div>RRHFColorPicker</div>;
};

// // form
// import { useFormContext, Controller, RegisterOptions } from 'react-hook-form';
// // @mui
// import { TextFieldProps, useTheme } from '@mui/material';
// import { ColorSinglePicker } from '../color';

// // ----------------------------------------------------------------------

// type IProps = {
//   name: string;
//   label: string;
//   rules?: RegisterOptions;
// };

// type Props = IProps & TextFieldProps;

// export default function RHFTextField({ name, label, ...other }: Props) {
//   const theme = useTheme();
//   const { control, watch } = useFormContext();

//   return (
//     <Controller
//       control={control}
//       name={name}
//       rules={other.rules}
//       render={({ field: { onChange } }) => (
//         <ColorSinglePicker
//           label={label}
//           value={watch(name)}
//           onChangeColor={(color) => onChange(color)}
//           colors={[
//             theme.palette.grey[900],
//             theme.palette.grey[100],
//             theme.palette.secondary.light,
//             theme.palette.secondary.main,
//             theme.palette.secondary.dark,
//             theme.palette.info.light,
//             theme.palette.info.main,
//             theme.palette.info.dark,
//             theme.palette.warning.light,
//             theme.palette.warning.main,
//             theme.palette.warning.dark,
//             theme.palette.error.light,
//             theme.palette.error.main,
//             theme.palette.error.dark,
//             theme.palette.chart.violet[0],
//             theme.palette.chart.violet[3],
//           ]}
//         />
//       )}
//     />
//   );
// }
