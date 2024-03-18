import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Button, Text, Heading, Img, Input } from "../../components";
import DashboardDeFiListchain from "../../components/DashboardDeFiListchain";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

const tableData = [
  { name: "Bitcoin", balance: "0,04321", rowtotalvalue: "$2,340.32" },
  { name: "Ethereum", balance: "32,234", rowtotalvalue: "$5,340.32" },
];

type TableRowType = { name: string; balance: string; rowtotalvalue: string };

export default function DashboardDeFiPage() {
  const [collapsed, setCollapsed] = React.useState(false);
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper<TableRowType>();
    return [
      tableColumnHelper.accessor("name", {
        cell: (info) => (
          <div className="flex items-end gap-3 sm:p-5">
            <Button className="flex items-center justify-center h-[32px] w-[32px] mt-5 mb-[9px] bg-yellow-900 rounded-[50%]">
              <Img src="images/img_frame_6.svg" />
            </Button>
            <Heading as="h2" className="mb-[15px] capitalize">
              {info?.getValue?.()}
            </Heading>
          </div>
        ),
        header: (info) => (
          <Text size="md" as="p" className="p-px">
            Name
          </Text>
        ),
        meta: { width: "248px" },
      }),
      tableColumnHelper.accessor("balance", {
        cell: (info) => (
          <Heading as="h3" className="capitalize text-center">
            {info?.getValue?.()}
          </Heading>
        ),
        header: (info) => (
          <Text size="md" as="p" className="pl-[5px] text-center">
            Balance
          </Text>
        ),
        meta: { width: "155px" },
      }),
      tableColumnHelper.accessor("rowtotalvalue", {
        cell: (info) => (
          <div className="flex justify-between items-end gap-5 sm:p-5 flex-1">
            <Heading as="h4" className="mb-0.5 capitalize text-right">
              {info?.getValue?.()}
            </Heading>
            <Button className="flex items-center justify-center h-[27px] mt-2.5 px-[13px] text-white-A700 text-center text-base font-medium bg-white-A700_19 min-w-[72px] rounded-md">
              Trade
            </Button>
          </div>
        ),
        header: (info) => (
          <div className="flex justify-between gap-5 md:p-5 flex-1">
            <Text size="md" as="p">
              Total Value
            </Text>
            <Text size="md" as="p" className="mr-3.5">
              Trade
            </Text>
          </div>
        ),
        meta: { width: "241px" },
      }),
    ];
  }, []);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

  return (
    <>
      <Helmet>
        <title>Rodgers Chayuga's Application</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full pl-4 py-4 bg-black-900">
        <div className="flex md:flex-col justify-end items-center mb-[29px] gap-9">
          <div className="h-[963px] md:w-full flex-1 relative md:flex-none">
            <div className="w-[68%] pt-[26px] left-[15%] top-0 m-auto sm:pt-5 absolute">
              <header className="flex justify-between items-center ml-[110px] md:ml-0">
                <Heading size="lg" as="h4" className="self-end mb-[7px] !font-roboto !font-semibold">
                  Welcome Back, Arkhan
                </Heading>
                <div className="flex justify-center items-start w-[30%] gap-5">
                  <Input
                    name="search"
                    placeholder={`Search`}
                    value={searchBarValue}
                    onChange={(e: string) => setSearchBarValue(e)}
                    prefix={
                      <Img src="images/img_icon_24_search.svg" alt="icon / 24 / search" className="cursor-pointer" />
                    }
                    suffix={
                      searchBarValue?.length > 0 ? (
                        <CloseSVG onClick={() => setSearchBarValue("")} height={24} width={24} fillColor="#ffffffff" />
                      ) : null
                    }
                    className="flex items-center justify-center h-[48px] pl-4 pr-[35px] gap-5 sm:pr-5 text-gray-500 text-lg font-medium bg-gray-900_99 flex-1 rounded-[16px]"
                  />
                  <div className="h-[27px] w-[8%] mt-[9px] relative">
                    <Img
                      src="images/img_icon_24_notification.svg"
                      alt="icontwentyfour"
                      className="h-[24px] w-[24px] bottom-0 left-0 m-auto absolute"
                    />
                    <Heading
                      size="xs"
                      as="p"
                      className="flex justify-center items-center h-[14px] w-[14px] right-0 top-0 m-auto bg-red-A700 text-center absolute rounded-[50%]"
                    >
                      6
                    </Heading>
                  </div>
                </div>
                <div className="flex justify-center items-center w-[11%] gap-6">
                  <Text size="lg" as="p" className="!text-gray-300">
                    Evano
                  </Text>
                  <Img src="images/img_ellipse_1.png" alt="circleimage" className="h-[48px] w-[48px] rounded-[50%]" />
                </div>
              </header>
              <Img src="images/img_group_47.png" alt="image" className="h-[473px] w-full md:h-auto object-cover" />
            </div>
            <div className="flex flex-col items-start justify-center w-[74%] gap-5 bottom-0 right-0 p-7 m-auto sm:p-5 bg-gray-900 absolute rounded-[16px]">
              <Heading size="md" as="h1" className="ml-3 md:ml-0">
                Tokens
              </Heading>
              <ReactTable
                size="xs"
                bodyProps={{ className: "" }}
                headerProps={{ className: "md:flex-col" }}
                rowDataProps={{ className: "sm:flex-col" }}
                className="w-[644px] mb-0.5 ml-[11px] md:ml-0"
                columns={tableColumns}
                data={tableData}
              />
            </div>
            <div className="flex flex-col items-center w-[74%] gap-[47px] right-0 top-[11%] p-[38px] m-auto sm:p-5 bg-gray-900 absolute rounded-[16px]">
              <div className="flex md:flex-row sm:flex-col w-[95%] md:w-full mt-[3px] gap-[75px]">
                <div className="flex justify-between items-center gap-5 sm:p-5">
                  <Button className="flex items-center justify-center h-[60px] w-[60px] bg-gray-400_19 rounded-[13px]">
                    <Img src="images/img_group_6.svg" />
                  </Button>
                  <div className="flex flex-col items-start gap-0.5">
                    <Text size="md" as="p" className="!text-white-A700">
                      Total assets
                    </Text>
                    <Heading size="lg" as="h4" className="uppercase">
                      $ 87.743
                    </Heading>
                  </div>
                </div>
                <div className="flex justify-between items-center gap-5 sm:p-5">
                  <Button className="flex items-center justify-center h-[60px] w-[60px] bg-gray-400_19 rounded-[13px]">
                    <Img src="images/img_wallet_money_1.svg" />
                  </Button>
                  <div className="flex flex-col self-end items-start mb-0.5 gap-0.5">
                    <Text size="md" as="p" className="!text-white-A700">
                      Total deposits
                    </Text>
                    <Heading size="lg" as="h4" className="uppercase">
                      $ 78,342
                    </Heading>
                  </div>
                </div>
                <div className="flex justify-between items-center gap-5 sm:p-5">
                  <Button className="flex items-center justify-center h-[60px] w-[60px] bg-gray-400_19 rounded-[13px]">
                    <Img src="images/img_chart_square_1.svg" />
                  </Button>
                  <div className="flex flex-col items-start gap-0.5">
                    <Text size="md" as="p" className="!text-white-A700">
                      APY
                    </Text>
                    <Heading size="lg" as="h4" className="uppercase">
                      + 12.3%
                    </Heading>
                  </div>
                </div>
              </div>
              <Tabs
                className="flex flex-col self-stretch mb-[9px]"
                selectedTabClassName="!text-gray-900_03 bg-white-A700 rounded-md"
                selectedTabPanelClassName="mt-[23px] relative tab-panel--selected"
              >
                <Heading size="md" as="h5">
                  Portfolios performance
                </Heading>
                <div className="flex justify-between items-center mt-[13px] gap-5">
                  <div className="flex justify-center items-center w-[18%] gap-[18px]">
                    <div className="flex justify-center items-center gap-1 p-[5px] bg-black-900_66 flex-1 rounded-[16px]">
                      <div className="flex flex-col items-center p-[5px] bg-gradient1 flex-1 rounded-[50%]">
                        <Img src="images/img_logo_24_ethereum.svg" alt="logotwentyfour" className="h-[12px] w-[12px]" />
                      </div>
                      <Text size="s" as="p" className="!text-white-A700">
                        ETH
                      </Text>
                      <Img src="images/img_chevron_down_1.svg" alt="chevrondownone" className="h-[12px] w-[12px]" />
                    </div>
                    <Img src="images/img_candle_1.svg" alt="candleone_one" className="h-[24px] w-[24px]" />
                  </div>
                  <TabList className="flex justify-center w-[29%] gap-2">
                    <Tab className="flex items-center justify-center h-[22px] w-full px-[5px] text-gray-400 text-center text-[10px] font-medium bg-gray-800_99 flex-1 rounded-md">
                      1H
                    </Tab>
                    <Tab className="flex items-center justify-center h-[22px] w-full px-[5px] text-gray-900_03 text-center text-[10px] font-medium bg-white-A700 flex-1 rounded-md">
                      1D
                    </Tab>
                    <Tab className="flex items-center justify-center h-[22px] w-full px-[5px] text-gray-400 text-center text-[10px] font-medium bg-gray-800_99 flex-1 rounded-md">
                      3D
                    </Tab>
                    <Tab className="flex items-center justify-center h-[22px] w-full px-[5px] text-gray-400 text-center text-[10px] font-medium bg-gray-800_99 flex-1 rounded-md">
                      1M
                    </Tab>
                    <Tab className="flex justify-center gap-2">
                      <Button className="flex items-center justify-center h-[22px] px-[5px] text-gray-400 text-center text-[10px] font-medium bg-gray-800_99 min-w-[26px] rounded-md">
                        1Y
                      </Button>
                      <Img src="images/img_frame_14.svg" alt="image_one" className="h-[22px] rounded-md" />
                    </Tab>
                  </TabList>
                </div>
                {[...Array(5)].map((_, index) => (
                  <TabPanel key={`tab-panel${index}`} className="absolute">
                    <div className="w-full">
                      <div>
                        <div>
                          <div className="flex md:flex-col justify-between items-start gap-5">
                            <div className="flex flex-col items-start mt-[7px] gap-[31px] md:p-5">
                              <Text as="p" className="self-center text-right !text-[10.49px]">
                                $ 600
                              </Text>
                              <Text as="p" className="self-center text-right !text-[10.49px]">
                                $ 500
                              </Text>
                              <Text as="p" className="self-center text-right !text-[10.49px]">
                                $ 400
                              </Text>
                              <Text as="p" className="self-center text-right !text-[10.49px]">
                                $ 300
                              </Text>
                              <Text as="p" className="self-center text-right !text-[10.49px]">
                                $ 200
                              </Text>
                              <Text as="p" className="self-end text-right !text-[10.49px]">
                                $ 100
                              </Text>
                            </div>
                            <div className="flex flex-col items-end gap-1 md:p-5 flex-1">
                              <div className="self-stretch h-[283px] relative">
                                <Img
                                  src="images/img_indicators.svg"
                                  alt="indicators_one"
                                  className="h-[209px] ml-[15px] left-[2%] bottom-0 top-0 my-auto absolute"
                                />
                                <div className="flex md:flex-col justify-center items-start w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                                  <Img
                                    src="images/img_line.svg"
                                    alt="line_one"
                                    className="h-[283px] md:w-full md:h-auto"
                                  />
                                  <div className="flex justify-center mt-[68px] ml-[-32px] p-[3px] md:ml-0 bg-pink-500">
                                    <Text size="s" as="p" className="!text-white-A700 text-right">
                                      $ 450
                                    </Text>
                                  </div>
                                </div>
                                <div className="h-px w-[96%] top-[28%] right-0 left-0 m-auto bg-red-A700_01 absolute" />
                              </div>
                              <div className="flex justify-between w-[93%] md:w-full mr-[5px] gap-5 md:mr-0">
                                <Text as="p" className="text-center !text-[10.49px]">
                                  17 Mar
                                </Text>
                                <Text as="p" className="text-center !text-[10.49px]">
                                  18 Mar
                                </Text>
                                <Text as="p" className="text-center !text-[10.49px]">
                                  19 Mar
                                </Text>
                                <Text as="p" className="text-center !text-[10.49px]">
                                  20 Mar
                                </Text>
                                <Text as="p" className="text-center !text-[10.49px]">
                                  21 Mar
                                </Text>
                                <Text as="p" className="text-center !text-[10.49px]">
                                  22 Mar
                                </Text>
                                <Text as="p" className="text-center !text-[10.49px]">
                                  23 Mar
                                </Text>
                                <Text as="p" className="text-center !text-[10.49px]">
                                  24 Mar
                                </Text>
                                <Text as="p" className="text-center !text-[10.49px]">
                                  25 Mar
                                </Text>
                                <Text as="p" className="text-center !text-[10.49px]">
                                  26 Mar
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                ))}
              </Tabs>
            </div>
            <Sidebar
              width="235px !important"
              collapsedWidth="80px !important"
              collapsed={collapsed}
              className="flex-col h-screen gap-11 top-0 left-0 bottom-0 my-auto !sticky overflow-auto"
            >
              <div className="flex items-center gap-3">
                <Img src="images/img_group_225.svg" alt="image_two" className="self-start h-[28px] w-[28px]" />
                <Heading size="xl" as="h4" className="!font-urbanist">
                  <span className="text-white-A700">Crypt</span>
                  <span className="text-white-A700 font-normal">fest</span>
                </Heading>
              </div>
              <Menu
                menuItemStyles={{
                  button: {
                    padding: "5px 5px 5px 24px",
                    gap: "19px",
                    alignSelf: "start",
                    color: "#dddddd",
                    fontWeight: 500,
                    fontSize: "18px",
                    borderRadius: "16px",
                    [`&:hover, &.ps-active`]: {
                      color: "#ffffff",
                      background: "linear-gradient(163.57deg, #1e8ebe,#430394,#430394,#b001cd)",
                    },
                  },
                }}
                rootStyles={{ ["&>ul"]: { gap: "574px" } }}
                className="flex flex-col self-center w-full"
              >
                <div className="flex flex-col gap-[0.97px]">
                  <MenuItem
                    icon={
                      <Img src="images/img_icon_24_dasboard.svg" alt="icontwentyfour" className="h-[24px] w-[24px]" />
                    }
                  >
                    Dashboard
                  </MenuItem>
                  <MenuItem
                    icon={
                      <Img src="images/img_icon_24_trade.svg" alt="icon24trade_one" className="h-[24px] w-[24px]" />
                    }
                  >
                    Trade
                  </MenuItem>
                  <MenuItem
                    icon={<Img src="images/img_icon_24_donate.svg" alt="icon24donate" className="h-[24px] w-[24px]" />}
                  >
                    Deposits
                  </MenuItem>
                  <MenuItem
                    icon={
                      <Img src="images/img_icon_24_protocols.svg" alt="icontwentyfour" className="h-[24px] w-[24px]" />
                    }
                  >
                    Protocols
                  </MenuItem>
                  <MenuItem
                    icon={
                      <Img src="images/img_icon_24_setting.svg" alt="icon24setting" className="h-[24px] w-[24px]" />
                    }
                  >
                    Settings
                  </MenuItem>
                  <MenuItem
                    icon={<Img src="images/img_icon_24_user.svg" alt="icon24user_one" className="h-[24px] w-[24px]" />}
                  >
                    Profile
                  </MenuItem>
                </div>
                <div className="flex justify-center">
                  <MenuItem
                    icon={<Img src="images/img_logout_1_1.svg" alt="logout1one_one" className="h-[24px] w-[24px]" />}
                  >
                    Log Out
                  </MenuItem>
                </div>
              </Menu>
            </Sidebar>
          </div>
          <div className="self-end h-[889px] w-[24%] relative">
            <div className="w-[90%] right-0 top-0 m-auto absolute">
              <Img
                src="images/img_group_173.png"
                alt="image_three"
                className="h-[625px] w-full md:h-auto object-cover"
              />
            </div>
            <div className="flex flex-col items-center justify-center w-[88%] bottom-0 left-0 p-[21px] m-auto sm:p-5 bg-blue_gray-900_02 absolute rounded-[16px]">
              <div className="flex justify-center w-[56%] md:w-full">
                <div className="flex justify-center items-center w-full">
                  <div className="flex flex-col self-end items-center w-[33%] gap-1.5 z-[1]">
                    <Img
                      src="images/img_unsplash_mez3pofgs_k.png"
                      alt="unsplash_one"
                      className="h-[45px] w-[45px] rounded-[50%]"
                    />
                    <Img
                      src="images/img_unsplash_d1upkifd04a.png"
                      alt="unsplash_three"
                      className="h-[31px] w-[31px] rounded-[50%]"
                    />
                  </div>
                  <div className="flex flex-col items-center mb-0.5 ml-[-2px] flex-1">
                    <div className="flex justify-center items-center w-[82%] md:w-full gap-[22px] z-[1]">
                      <Img
                        src="images/img_unsplash_3tll_97hnjo.png"
                        alt="unsplash3tll"
                        className="self-end h-[22px] w-[22px] mb-[3px] rounded-[50%]"
                      />
                      <Img
                        src="images/img_unsplash_3tll_97hnjo_31x31.png"
                        alt="unsplash3tll"
                        className="h-[31px] w-[31px] rounded-[50%]"
                      />
                    </div>
                    <div className="flex self-stretch justify-center items-center mt-[-1px]">
                      <div className="h-[60px] flex-1 relative">
                        <Img
                          src="images/img_unsplash_o3ymvt7wf9u.png"
                          alt="unsplash_five"
                          className="h-[55px] w-[55px] bottom-0 left-0 m-auto rounded-[50%] absolute"
                        />
                        <Img
                          src="images/img_unsplash_et_78qkmmqs.png"
                          alt="unsplashet_one"
                          className="h-[24px] w-[24px] right-[1%] top-0 m-auto rounded-[50%] absolute"
                        />
                      </div>
                      <Img
                        src="images/img_unsplash_w7b3edub_2i.png"
                        alt="unsplash_seven"
                        className="self-end h-[31px] w-[31px] mb-[9px] rounded-[50%]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Heading as="h2" className="mt-7 tracking-[0.16px] !font-bold">
                Join Our Community
              </Heading>
              <Text
                as="p"
                className="w-[85%] md:w-full mt-2.5 !text-white-A700 tracking-[0.10px] text-center !font-normal leading-[150%]"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
              <Button className="flex items-center justify-center h-[40px] w-full mt-[15px] mb-[3px] px-[35px] sm:px-5 text-white-A700 tracking-[0.14px] font-poppins text-center text-sm font-semibold bg-gray-900_02 rounded-[12px]">
                Join Now
              </Button>
            </div>
            <div className="flex flex-col items-start justify-center w-[88%] gap-[25px] left-0 top-[4%] p-[29px] m-auto sm:p-5 bg-gray-900 absolute rounded-[16px]">
              <Text size="lg" as="p" className="!text-white-A700 capitalize">
                Chain allocation
              </Text>
              <div className="flex flex-col self-stretch gap-[18px]">
                <DashboardDeFiListchain
                  bitcoin="Bitcoin"
                  price="$ 23,3B"
                  p71sixtyeight="71,68%"
                  className="flex justify-center items-center md:p-5 flex-1"
                />
                <DashboardDeFiListchain className="flex justify-center items-center md:p-5 flex-1" />
                <DashboardDeFiListchain
                  bitcoin="Shiba"
                  price="$ 23,3B"
                  p71sixtyeight="71,68%"
                  className="flex justify-center items-center md:p-5 flex-1"
                />
                <DashboardDeFiListchain className="flex justify-center items-center md:p-5 flex-1" />
                <DashboardDeFiListchain className="flex justify-center items-center md:p-5 flex-1" />
              </div>
              <Button className="flex items-center justify-center h-[39px] w-full px-[35px] sm:px-5 text-white-A700 text-center text-base font-medium bg-gray-900_02 rounded-[12px]">
                View All
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
