// form
import { useFormContext, Controller } from "react-hook-form";
import { IFieldProps } from ".";
import { CheckboxField } from "../nativeWrappers/CheckboxField";

export default function RRHFCheckbox<T>({
  name,
  label,
  rules,
  ...other
}: IFieldProps<T>) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name.toString()}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <CheckboxField
          name={name.toString()}
          label={label}
          error={error?.message}
          placeholder={label}
          onChange={field.onChange}
          value={field.value || false}
        />
      )}
    />
  );
}

// // ----------------------------------------------------------------------

// interface RHFMultiCheckboxProps
//   extends Omit<FormControlLabelProps, "control" | "label"> {
//   name: string;
//   options: {
//     label: string;
//     value: any;
//   }[];
// }

// export function RHFMultiCheckbox({
//   name,
//   options,
//   ...other
// }: RHFMultiCheckboxProps) {
//   const { control } = useFormContext();

//   return (
//     <Controller
//       name={name}
//       control={control}
//       render={({ field }) => {
//         const onSelected = (option: string) =>
//           field.value.includes(option)
//             ? field.value.filter((value: string) => value !== option)
//             : [...field.value, option];

//         return (
//           <FormGroup>
//             {options.map((option) => (
//               <FormControlLabel
//                 key={option.value}
//                 control={
//                   <Checkbox
//                     checked={field.value.includes(option.value)}
//                     onChange={() => field.onChange(onSelected(option.value))}
//                   />
//                 }
//                 label={option.label}
//                 {...other}
//               />
//             ))}
//           </FormGroup>
//         );
//       }}
//     />
//   );
// }
