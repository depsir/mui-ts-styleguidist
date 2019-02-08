import * as React from 'react';
import { withStyles, WithStyles } from "@material-ui/core/es/styles";

const styles = {
    fancyStyle: {
        backgroundColor: "red"
    }
}

interface IProps {
    message: string;
}

type AllProps = IProps & WithStyles<typeof styles>

function Styled(props: AllProps) {
    return <div className={props.classes.fancyStyle}>props.message</div>;
}

export default withStyles(styles)(Styled) as React.StatelessComponent<IProps>

