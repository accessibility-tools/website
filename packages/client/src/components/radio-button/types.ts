export interface IRadioButton {
  label: string;
  value: string;
  isChecked?: boolean;
  handleCheckedChange?: () => void;
  className?: string;
}
