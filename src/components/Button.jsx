import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";

export const Button = ({ onClick, styles, ...props }) => {
  return (
    <IconButton
      onClick={onClick}
      style={{...styles}}
      {...props}
    >
      <AddCircleIcon fontSize="large" />
    </IconButton>
  );
};
