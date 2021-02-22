import InputText from '../InputText';
import withTitle from '../hoc/withTitle';
import withIcon from "../hoc/withIcon";

export const InputWithTitle = withTitle(InputText);
export const InputWithIcon = withIcon(InputText);
export const InputWithIconWithTitle = withTitle(withIcon(InputText));
