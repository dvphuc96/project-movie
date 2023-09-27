import { Popover as PopoverAntd, PopoverProps as PopoverPropsAntd } from 'antd'

type PopoverProps = PopoverPropsAntd

export const Popover = (props: PopoverProps) => {
    return <PopoverAntd {...props} />
}
