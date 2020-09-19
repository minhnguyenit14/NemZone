import { Heading1Props } from '.';
import cn from 'classnames';

const Heading1: React.FunctionComponent<Heading1Props> = ({
    className,
    ...h1Props
}) => {
    return (
        <h1
            {...h1Props}
            className={cn("heading_1", className)}
        />
    );
}

export default Heading1;