import { Tabs } from "components"
import { AccountInfo } from "./AccountInfo"
import { AccountHistoryBooking } from "./AccountHistoryBooking"

export const AccountTemplate = () => {
  return (
    <div className="max-w-[1100px] mx-auto">
      <Tabs
      tabPosition="left"
      items={[
        {
          label: 'Thông tin tài khoản',
          key: 'accountInfo',
          children: <AccountInfo/>,
        },
        {
          label: 'Lịch sử đặt vé',
          key: 'accountHistoryBooking',
          children: <AccountHistoryBooking/>,
        }
      ]}
      />
    </div>
  )
}
