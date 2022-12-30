let __paintInterval__ = 0;
let __scrollInterval__ = 0;

EDSFormats.SMRT = {
    standardService: {
        serviceNumber: {
            align: "right,centre-y",
            margin: {
                right: 7
            },
            text: "$serviceNumber",
            font: "Arial-20",
            spacing: 2
        },
        destination: {
            align: "centre-x,top",
            margin: {
                top: 2,
                right: "width(serviceNumber) + len(7)"
            },
            text: "$destination",
            spacing: 1
        },
        scroll: {
            align: "centre-x,top",
            margin: {
                top: 14,
                right: "width(serviceNumber) + len(7)"
            },
            scrolls: "$scrolls",
            rotate: true,
            rotateSpeed: 3000,

            font: "$scrollFont",
            spacing: 1
        },

        text: "$destination"
    },

    pids: {
        __dynamic__: (matrix, data) => {
            let hold = false;
            function paint() {
                if (hold) return;

                matrix.clearRectangle(0, 0, matrix.width, matrix.height);

                matrixPrimitives.setStrokeColour(0x84e76e);
                matrixPrimitives.strokeRectangle(matrix, 0, 0, 32, 16);

                let font = Font.fromNameString("LECIP-PIDS-13:7");
                let serviceNumberObj = new TextObject(data.serviceNumber, font, null, 1);

                let textWidth;
                try {
                    textWidth = serviceNumberObj.takeMeasure().width;
                } catch (e) {
                    textWidth = Infinity;
                }

                if (textWidth >= 32) {
                    font = Font.fromNameString("LECIP-PIDS-13:5");
                    serviceNumberObj.font = font;
                    textWidth = serviceNumberObj.takeMeasure().width;
                }

                let textPosition = Math.round(32 / 2 - textWidth / 2);
                serviceNumberObj.position = new Position(textPosition, 1);

                matrix.drawText(serviceNumberObj, 0xffffff);

                function drawNextStop() {
                    let bottomRowNum = scrollNum % 3;

                    let texts = [
                        [new TextObject("NEXT>>", Font.fromNameString("LECIP-PIDS-13:5"), new Position(1, 17), 1), 0xffffff],
                        [new TextObject("STOP>>", Font.fromNameString("LECIP-PIDS-13:5"), new Position(1, 17), 1), 0xe35f57],
                        [new TextObject("Arr>>", Font.fromNameString("LECIP-PIDS-13:5"), new Position(4, 17), 1), 0xeae44a],
                    ];

                    matrix.drawText(texts[bottomRowNum][0], texts[bottomRowNum][1]);
                }

                let {destination} = data;
                let currentScroll = Math.floor(scrollNum / 3);

                if (data.secondDestination) {
                    if (currentScroll > data.secondDestination.changeIndex)
                        destination = data.secondDestination.name;
                }
                matrix.drawText(new TextObject(destination, Font.fromNameString("LECIP-PIDS-13:5"), new Position(33, 1), 1), 0xffffff);

                // Possibly make scrolls query TSG site? Not great for offline use tho
                let currentScrollObj = new TextObject(data.scrolls[currentScroll], Font.fromNameString("LECIP-PIDS-13:5"), new Position(33, 17), 1);
                let measure = currentScrollObj.takeMeasure();
                let scrollWidth = measure.width,
                    scrollHeight = measure.height;

                if (scrollWidth === 0) return;
                drawNextStop();

                if (scrollWidth > matrix.width - 34) { // scrolling text
                    hold = true;

                    let frameCount = scrollWidth + matrix.width - 32;
                    let timeBetweenFrames = 100;

                    let frameNum = 0;
                    __scrollInterval__ = setInterval(() => {
                        if (frameNum == frameCount) {
                            clearInterval(__scrollInterval__);
                            hold = false;
                            return;
                        }
                        matrix.clearRectangle(0, 17 + (13 - scrollHeight), matrix.width, 17 + scrollHeight);

                        currentScrollObj.position.x = matrix.width - frameNum;

                        matrix.drawText(currentScrollObj, 0xffffff);
                        matrix.clearRectangle(0, 17 + (13 - scrollHeight), 33, 17 + scrollHeight);
                        drawNextStop();

                        matrixPrimitives.setStrokeColour(0x84e76e);
                        matrixPrimitives.strokeRectangle(matrix, 0, 0, 32, 16);

                        frameNum++;
                    }, timeBetweenFrames);
                } else
                    matrix.drawText(currentScrollObj, 0xffffff);

                scrollNum++;
                if (scrollNum >= data.scrolls.length * 3)
                    scrollNum = 0;
            }

            let scrollNum = 0;
            clearInterval(__paintInterval__);
            clearInterval(__scrollInterval__);

            __paintInterval__ = setInterval(paint, 1000);

            paint();
        }
    },
    message: {
        display: {
            align: "centre-x,centre-y",
            text: "$text",
            font: "$font",
            spacing: "$spacing"
        },

        text: "$text"
    },
    logo: {
        logo: {
            align: "centre-x,centre-y",
            image: "$image"
        },

        text: "$text"
    },
}

EDSData.SMRT = {
    1: {
        1: {
            front: {
                renderType: "message",
                text: "CHARTERED",
                font: "Arial-12",
                spacing: 2
            },
            pids: {
                renderType: "pids",
                serviceNumber: "",
                destination: "CHARTERED",
                scrolls: [""]
            }
        }
    },
    2: {
        1: {
            front: {
                renderType: "message",
                text: "ANG MO KIO DEPOT",
                font: "Arial-12",
                spacing: 2
            },
            pids: {
                renderType: "pids",
                serviceNumber: "",
                destination: "ANG MO KIO DEPOT",
                scrolls: [""]
            }
        }
    },
    3: {
        1: {
            front: {
                renderType: "message",
                text: "KRANJI DEPOT",
                font: "Arial-12",
                spacing: 2
            },
            pids: {
                renderType: "pids",
                serviceNumber: "",
                destination: "KRANJI DEPOT",
                scrolls: [""]
            }
        }
    },
    4: {
        1: {
            front: {
                renderType: "message",
                text: "SMRT BUSES",
                font: "Arial-12",
                spacing: 2
            },
            pids: {
                renderType: "pids",
                serviceNumber: "",
                destination: "SMRT BUSES",
                scrolls: [""]
            }
        }
    },
    5: {
        1: {
            front: {
                renderType: "message",
                text: "OFF SERVICE",
                font: "Arial-12",
                spacing: 2
            },
            pids: {
                renderType: "pids",
                serviceNumber: "",
                destination: "OFF SERVICE",
                scrolls: [""]
            }
        }
    },
    6: {
        1: {
            front: {
                renderType: "message",
                text: "WOODLANDS DEPOT",
                font: "Arial-12",
                spacing: 2
            },
            pids: {
                renderType: "pids",
                serviceNumber: "",
                destination: "WOODLANDS DEPOT",
                scrolls: [""]
            }
        }
    },
    7: {
        1: {
            front: {
                renderType: "message",
                text: "OUT OF SERVICE",
                font: "Arial-12",
                spacing: 2
            },
            pids: {
                renderType: "pids",
                serviceNumber: "",
                destination: "OUT OF SERVICE",
                scrolls: [""]
            }
        }
    },
    8: {
        1: {
            front: {
                renderType: "message",
                text: "OFF SERVICE",
                font: "Arial-12",
                spacing: 2
            },
            pids: {
                renderType: "pids",
                serviceNumber: "",
                destination: "OFF SERVICE",
                scrolls: [""]
            }
        }
    },
    9: {
        1: {
            front: {
                renderType: "message",
                text: "ON DRIVING TEST",
                font: "Arial-12",
                spacing: 2
            },
            pids: {
                renderType: "pids",
                serviceNumber: "",
                destination: "ON DRIVING TEST",
                scrolls: [""]
            }
        }
    },
    10: {
        1: {
            front: {
                renderType: "message",
                text: "FERRY SERVICE",
                font: "Arial-12",
                spacing: 2
            },
            pids: {
                renderType: "pids",
                serviceNumber: "",
                destination: "FERRY SERVICE",
                scrolls: [""]
            }
        }
    },
    11: {
        1: {
            front: {
                renderType: "message",
                text: "MRT SHUTTLE",
                font: "Arial-12",
                spacing: 2
            },
            pids: {
                renderType: "pids",
                serviceNumber: "",
                destination: "MRT SHUTTLE",
                scrolls: [""]
            }
        }
    },
    13: {
        1: {
            front: {
                renderType: "message",
                text: "TRAINING BUS",
                font: "Arial-12",
                spacing: 2
            },
            pids: {
                renderType: "pids",
                serviceNumber: "",
                destination: "TRAINING BUS",
                scrolls: [""]
            }
        }
    },
    80: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: " ",
                destination: {
                    text: "TAMPINES MRT TO & FROM",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "GIANT, IKEA & COURTS"
                ],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: " ",
                destination: "TAMPINES MRT",
                scrolls: [
                    "TAMPINES MRT",
                    "GIANT TAMPINES",
                    "IKEA TAMPINES",
                    "COURTS TAMPINES",
                    "TAMPINES MRT"
                ]
            }
        },
    }, 
    81: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: " ",
                destination: {
                    text: "PASIR RIS TO & FROM",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "GIANT, IKEA & COURTS"
                ],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: " ",
                destination: "PASIR RIS MRT",
                scrolls: [
                    "PASIR RIS MRT",
                    "GIANT TAMPINES",
                    "IKEA TAMPINES",
                    "COURTS TAMPINES",
                    "PASIR RIS MRT"
                ]
            }
        },
    },
    82: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: " ",
                destination: {
                    text: "BEDOK MRT TO & FROM",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "GIANT, IKEA & COURTS"
                ],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: " ",
                destination: "PASIR RIS MRT",
                scrolls: [
                    "BEDOK STN EXIT A",
                    "GIANT TAMPINES",
                    "IKEA TAMPINES",
                    "COURTS TAMPINES",
                    "BEDOK STN EXIT A"
                ]
            }
        },
    },     
    83: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: " ",
                destination: {
                    text: "SENGKANG TO & FROM",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "GIANT, IKEA & COURTS"
                ],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: " ",
                destination: "SENGKANG MRT",
                scrolls: [
                    "SENGKANG MRT",
                    "GIANT TAMPINES",
                    "IKEA TAMPINES",
                    "COURTS TAMPINES",
                    "SENGKANG MRT"
                ]
            }
        },
    },         
    117: {
        1: {
            front: {
                renderType: "logo",
                text: "SMRT BUSES",
                image: "logo"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "",
                destination: "SMRT BUSES",
                scrolls: [""]
            }
        }
    },
    199: {
        1: {
            front: {
                renderType: "message",
                text: "ON TEST",
                font: "Arial-12",
                spacing: 2
            },
            pids: {
                renderType: "pids",
                serviceNumber: "",
                destination: "ON TEST",
                scrolls: [""]
            }
        }
    },  
    1841: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "184",
                destination: {
                    text: "CLEMENTI via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "BUKIT PANJANG RD",
                    "CASHEW RD",
                    "UPPER BT TIMAH RD",
                    "CLEMENTI RD"
                ],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "184",
                destination: "COMMONWEALTH AVE WEST",
                scrolls: [
                    "THE LINEAR",
                    "BEF HAZEL PK TERR",
                    "CASHEW STN",
                    "ASSUMPTION PATHWAY SCH",
                    "AFT ASSUMPTION ENG SCH",
                    "HILLVIEW STN EXIT A",
                    "THE RAIL MALL",
                    "OPP HUME PK CONDO",
                    "OPP THE HILLSIDE",
                    "AFT BT TIMAH FIRE STN",
                    "SOUTHAVEN II",
                    "OPP BEAUTY WORLD CTR",
                    "OPP BT TIMAH PLAZA",
                    "CLEMENTI STN EXIT B"
                ]
            }
        },
    },    
    1842: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "184",
                destination: {
                    text: "BUKIT PANJANG via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "CLEMENTI RD",
                    "UPP BUKIT TIMAH RD",
                    "CASHEW ROAD",
                    "BUKIT PANJANG RD"
                ],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "184",
                destination: "WOODLANDS RD",
                scrolls: [
                    "CLEMENTI TO",
                    "BUKIT PANJANG",
                    "GALI BATU TER"
                ]
            }
        },
    },        
    6701: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "67",
                destination: {
                    text: "TAMPINES via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "UPP BT TIMAH RD",
                    "DUNEARN RD",
                    "SERANGOON RD",
                    "SIMS AVE",
                    "NEW UPP CHANGI RD",
                    "BEDOK NTH AVE 3"
                ],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "67",
                destination: "TAMPINES INT",
                scrolls: [
                    "CHOA CHU KANG INT",
                    "BLK 352",
                    "BLK 224",
                    "BLK 239",
                    "BLK 113",
                    "BLK 26",
                    "PHOENIX STN",
                    "BT PANJANG STN EXIT A/LRT",
                    "THE LINEAR",
                    "BEF HAZEL PK TERR",
                    "CASHEW STN",
                    "ASSUMPTION PATHWAY SCH",
                    "AFT ASSUMPTION ENG SCH",
                    "HILLVIEW STN EXIT A",
                    "THE RAIL MALL",
                    "OPP HUME PK CONDO",
                    "OPP THE HILLSIDE",
                    "AFT BT TIMAH FIRE STN",
                    "SOUTHAVEN II",
                    "OPP BEAUTY WORLD CTR",
                    "OPP BT TIMAH PLAZA",
                    "OPP KING ALBERT PK STN",
                    "HUA GUAN GDNS",
                    "OPP THE NEXUS",
                    "AFT SWISS CLUB RD",
                    "OPP SIXTH AVE STN",
                    "AFT JLN NAGA SARI",
                    "NATL JC",
                    "OPP TAN KAH KEE STN",
                    "OPP CORONATION PLAZA",
                    "OPP BOTANIC GDNS STN",
                    "AFT KHEAM HOCK RD",
                    "AFT DUNKIRK AVE",
                    "OPP STEVENS STN",
                    "SCGS PR",
                    "BEF GOLDHILL AVE",
                    "ANGLO-CHINESE SCH",
                    "CHANCERY CT",
                    "OPP NEWTON STN EXIT C",
                    "OPP NEWTON FC",
                    "AFT MAKEPEACE RD",
                    // "KK WOMEN & CHILD HOSP",
                    "LITTLE INDIA STN",
                    "TEKKA CTR",
                    "BROADWAY HOTEL",
                    "AFT FARRER PK STN EXIT G",
                    "AFT KEMPAS RD",
                    "OPP ARC 380",
                    "AFT KALLANG BAHRU",
                    "BEF KALLANG RD",
                    "AFT PADANG JERINGAU",
                    "KALLANG STN",
                    "AFT LOR 1 GEYLANG",
                    "YI XIU FTY BLDG",
                    "BEF LOR 23 GEYLANG",
                    "AFT ALJUNIED STN",
                    "BLK 134",
                    "SIMS VILLE",
                    "AFT TG KATONG CPLX",
                    "BLK 416",
                    "EUNOS STN/ INT",
                    "CASA SARINA",
                    "OPP HONG SAN SI TP",
                    "KEMBANGAN STN",
                    "OPP PERPETUAL SUCCOUR CH",
                    "CHAI CHEE IND PK",
                    "BLK 32",
                    "BEDOK STN EXIT B",
                    "BLK 221A",
                    "BLK 220 CP",
                    "BLK 403",
                    "BLK 506",
                    "BEDOK RESVR STN EXIT A",
                    "OPP THE CLEARWATER CONDO",
                    "OPP BEDOK REFORM TRG CTR",
                    "TAMPINES WEST STN EXIT B",
                    "BLK 938",
                    "OUR TAMPINES HUB",
                    "TAMPINES INT"
                ]
            }
        },
    },
    6702: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "67",
                destination: {
                    text: "CHOA CHU KANG via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "BEDOK NTH AVE 3",
                    "NEW UPP CHANGI RD",
                    "GEYLANG RD",
                    "JALAN BESAR",
                    "BUKIT TIMAH RD",
                    "UPP BT TIMAH RD"
                ],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "67",
                destination: "CHOA CHU KANG INT",
                scrolls: [
                    "TAMPINES INT",
                    "OPP OUR TAMPINES HUB",
                    "BLK 147",
                    "BEF TAMPINES WEST STN",
                    "BEDOK REFORM TRG CTR",
                    "THE CLEARWATER CONDO",
                    "BEDOK RESVR STN EXIT B",
                    "BLK 109",
                    "BET BLKS 139/140",
                    "OPP BLK 220 CP",
                    "BLK 27",
                    "BEDOK STN EXIT A",
                    "OPP BLK 32",
                    "OPP CHAI CHEE IND PK",
                    "AFT PERPETUAL SUCCOUR CH",
                    "BEF SIGLAP PLAIN",
                    "MJD KASSIM",
                    "BEF LOR 110 CHANGI",
                    "AFT KG EUNOS",
                    "AFT LOR 106 CHANGI",
                    "JOO CHIAT CPLX",
                    "BLK 14 MKT/FC",
                    "CITY PLAZA",
                    "OPP LOR 39 GEYLANG",
                    "AFT LOR 34 GEYLANG",
                    "AFT LOR 28 GEYLANG",
                    "BEF LOR 18 GEYLANG",
                    "OPP MOHD SALLEH MQUE",
                    "AFT SIMS WAY",
                    "OPP LOR 1 GEYLANG TER",
                    "BEF KG BUGIS",
                    "AFT KALLANG RD",
                    "BEF KALLANG BAHRU",
                    "ARC 380",
                    "HOA NAM BLDG",
                    "AFT ALLENBY RD",
                    "OPP VEERASAMY RD",
                    "ROCHOR STN",
                    "LITTLE INDIA STN EXIT A",
                    "OPP KK WOMEN & CHILD HOSP",
                    "NEWTON FC",
                    "NEWTON STN EXIT C",
                    "BALMORAL PLAZA",
                    "CITY TWRS",
                    "LENG KWANG BAPTIST CH",
                    "STEVENS STN",
                    "BEF LEWIS RD",
                    "NUS BT TIMAH CAMPUS",
                    "BOTANIC GDNS STN",
                    "BEF CROWN CTR",
                    "CORONATION PLAZA",
                    "TAN KAH KEE STN",
                    "CHINESE HIGH SCH",
                    "OPP NATL JC",
                    "SIXTH AVE STN",
                    "SIXTH AVE CTR",
                    "AFT MAPLE AVE",
                    "THE TESSARINA",
                    "THE NEXUS",
                    "KING ALBERT PK STN",
                    "KING ALBERT PK",
                    "PEI HWA PRESBY PR SCH",
                    "BEAUTY WORLD STN EXIT B",
                    "WOH HUP BLDG",
                    "BT REGENCY",
                    "AFT OLD JURONG RD",
                    "HUME PK CONDO",
                    "OPP THE RAIL MALL",
                    "HILLVIEW STN",
                    "OPP DAIRY FARM RD",
                    "OPP ASSUMPTION ENG SCH",
                    "BEF CASHEW STN",
                    "MIN OF DEFENCE",
                    "OPP THE LINEAR",
                    "BT PANJANG STN EXIT B",
                    "OPP PHOENIX STN",
                    "OPP BLK 26",
                    "OPP BLK 113",
                    "OPP BLKS 237/239",
                    "BLK 277",
                    "BLK 414",
                    "CHOA CHU KANG INT"
                ]
            }
        }
    },
    6703: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "67A",
                destination: {
                    text: "ENDS AT OPP",
                    font: "Arial-8"
                },
                scrolls: [
                    "CORONATION PLAZA"
                ],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "67A",
                destination: "OPP CORONATION PLAZA",
                scrolls: [
                ]
            }
        }
    },
    6704: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "67C",
                destination: {
                    text: "ENDS AT GEYLANG RD",
                    font: "Arial-8"
                },
                scrolls: [
                    "(BEFORE CITY PLAZA)"
                ],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "67C",
                destination: "GEYLANG RD",
                scrolls: [
                ]
            }
        }
    },
    6705: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "67W",
                destination: {
                    text: "ENDS AT",
                    font: "Arial-8"
                },
                scrolls: [
                    "LITTLE INDIA"
                ],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "67W",
                destination: "LITTLE INDIA",
                scrolls: [
                ]
            }
        }
    },
    9201: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "920",
                destination: {
                    text: "BT PANJANG via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "PETIR / JELEBU RD",
                    "SENJA RD / LINK",
                    "JELAPANG RD",
                    "SAUJANA RD",
                    "FAJAR RD",
                    "BT PANJANG RING RD",
                    "BANGKIT RD",
                ],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "920",
                destination: "BANGKIT RD",
                secondDestination: {
                    name: "BT PANJANG INT",
                    changeIndex: 14
                },
                scrolls: [
                    "BT PANJANG INT",
                    "OPP BT PANJANG PLAZA",
                    "BLK 602",
                    "WEST VIEW PRI SCH",
                    "OPP BLK 628",
                    "BLK 636A",
                    "WEST SPRING SEC SCH",
                    "BLK 651",
                    "BLK 532",
                    "BET BLKS 502/503",
                    "BLK 413",
                    "BET BLKS 443A/443B",
                    "BLK 442D",
                    "BANGKIT STN",
                    "OPP BLK 271", // where dest switch from BANGKIT RD to BT PANJANG INT
                    "OPP BLK 253",
                    "OPP BANGKIT STN",
                    "BLK 239",
                    "BLK 401A CP",
                    "BLK 408",
                    "OPP BLK 502",
                    "OPP BLK 532",
                    "OPP BLK 650",
                    "OPP WEST SPRING SEC SCH",
                    "BEF BLK 629A CP",
                    "BLK 628",
                    "BLK 610",
                    "BLK 541A CP",
                    "BT PANJANG PLAZA",
                    "BT PANJANG INT"
                ]
            }
        }
    },
    9501: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "950",
                destination: {
                    text: "JB SENTRAL TER via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "WOODLANDS AVE 3",
                    "WDL TRAIN CHECKPOINT"
                    
                ],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "950",
                destination: "JB SENTRAL BUS TER",
                scrolls: [
                ]
            }
        },
    },
    9502: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "950",
                destination: {
                    text: "WDL TEMP INT via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "WDL TRAIN CHECKPOINT",
                    "WOODLANDS AVE 3"
                    
                ],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "950",
                destination: "WOODLANDS TEMP INT",
                scrolls: [
                ]
            }
        },
    },
    9503: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "950",
                destination: {
                    text: "JB SENTRAL TER",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "MALAYSIA"
                    
                ],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "950",
                destination: "JB SENTRAL BUS TER",
                scrolls: [
                ]
            }
        },
    },
    9502: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "950",
                destination: {
                    text: "WDL TEMP INT via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "SINGAPORE"
                    
                ],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "950",
                destination: "WOODLANDS TEMP INT",
                scrolls: [
                ]
            }
        },
    },        
    9611: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "961",
                destination: {
                    text: "GEYLANG LOR 1 via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "WOODLANDS AVE 3",
                    "UPPER BUKIT TIMAH RD",
                    "QUEENSWAY",
                    "JALAN BUKIT MERAH",
                    "CHINATOWN",
                    "BEACH RD",
                    "KALLANG BAHRU"
                    
                ],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "961",
                destination: "GEYLANG LOR 1 TER",
                scrolls: [
                ]
            }
        },
    },
    9612: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "961",
                destination: {
                    text: "WDL TEMP INT via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "KALLANG BAHRU",
                    "BEACH RD",
                    "CHINATOWN",
                    "JALAN BUKIT MERAH",
                    "QUEENSWAY",
                    "UPPER BUKIT TIMAH RD",
                    "WOODLANDS AVE 3"
                    
                ],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "961",
                destination: "WOODLANDS TEMP INT",
                scrolls: [
                ]
            }
        },
    },
    9613: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "961M",
                destination: {
                    text: "GEYLANG LOR 1 via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "WOODLANDS AVE 3",
                    "UPPER BUKIT TIMAH RD",
                    "QUEENSWAY",
                    "JALAN BUKIT MERAH",
                    "CHINATOWN",
                    "MARINA CENTRE",
                    "BEACH RD",
                    "KALLANG BAHRU"
                    
                ],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "961M",
                destination: "GEYLANG LOR 1 TER",
                scrolls: [
                ]
            }
        },
    },
    9614: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "961M",
                destination: {
                    text: "WDL TEMP INT via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "KALLANG BAHRU",
                    "BEACH RD",
                    "MARINA CENTRE",
                    "CHINATOWN",
                    "JALAN BUKIT MERAH",
                    "QUEENSWAY",
                    "UPPER BUKIT TIMAH RD",
                    "WOODLANDS AVE 3"
                    
                ],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "961M",
                destination: "WOODLANDS TEMP INT",
                scrolls: [
                ]
            }
        },
    },       
    9801: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "980",
                destination: {
                    text: "GEYLANG LOR 1 via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "SEMBAWANG RD",
                    "UPPER THOMSON RD",
                    "THOMSON RD",
                    "MIDDLE ROAD",
                    "BEACH RD"
                ],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "980",
                destination: "GEYLANG LOR 1 TER",
                scrolls: [
                    "SEMBAWANG INT",
                    "OPP SEMBAWANG AIR BASE",
                    "KK WOMEN & CHILD HOSP",
                    "LITTLE INDIA STN",
                    "AFT PADANG JERINGAU",
                    "GEYLANG LOR 1 TER"
                ]
            }
        },
    },    
    9802: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "980",
                destination: {
                    text: "SEMBAWANG via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "BEACH RD",
                    "VICTORIA ST",
                    "THOMSON RD",
                    "UPPER THOMSON RD",
                    "SEMBAWANG RD"
                ],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "980",
                destination: "SEMBAWANG INT",
                scrolls: [
                    "GEYLANG LOR 1 TER",
                    "AFT SEMBAWANG AIR BASE",
                    "SEMBAWANG INT"
                ]
            }
        },
    },      
    9851: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "985",
                destination: {
                    text: "GEYLANG LOR 1 via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "TECK WHYE AVE",
                    "B. B WEST AVE 7, 4",
                    "B. B WEST AVE 2",
                    "B. B EAST AVE 2",
                    "JLN JURONG KECHIL",
                    "JLN TOA PAYOH",
                    "BENDEMEER ROAD",
                    "KALLANG MRT"
                ],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "985",
                destination: "GEYLANG LOR 1 TER",
                scrolls: [
                    "CHOA CHU KANG INT",
                    "LOT 1 SHOPPERS' MALL",
                    "OPP BLK 210",
                    "CCK POLYCLINIC",
                    "BLK 6",
                    "BLK 157",
                    "OPP BLK 26",
                    "BT BATOK FIRE STN",
                    "BEF BT BATOK WEST AVE 5",
                    "OPP BT BATOK DRIVING CTR",
                    "OPP HOMETEAMNS",
                    "BLK 334",
                    "BLK 331",
                    "BLK 315",
                    "BLK 306",
                    "AFT BT BATOK WEST AVE 5",
                    "OPP BLK 628",
                    "BLK 503",
                    "OPP BLK 242",
                    "OPP BLK 258",
                    "OPP BLK 266",
                    "AUTOBACS",
                    "AFT BT BATOK EAST AVE 6",
                    "THE HILLFORD",
                    "AFT CHUN TIN RD",
                    "OPP BLK 19",
                    "OPP BEAUTY WORLD STN",
                    // "GOH & GOH BLDG", // check &
                    "OPP CATHOLIC JC",
                    "OLD POLICE ACADEMY",
                    "TRELLIS TWRS",
                    "AFT BLK 195",
                    // "ST. ANDREW'S VILLAGE", // check .
                    "MOM SVCS CTR",
                    "BLK 54",
                    "BLK 44",
                    "OPP BOON KENG STN",
                    "BEF KALLANG PL",
                    "OPP KALLANG STN/BLK 2C",
                    "LOR 1 GEYLANG TER"
                ]
            }
        },
    },
    9852: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "985",
                destination: {
                    text: "CHOA CHU KANG via",
                    font: "ArialBold-8"
                },
                scrolls: [
                    "SERANGOON ROAD",
                    "JLN TOA PAYOH",
                    "JLN JURONG KECHIL",
                    "B. B EAST AVE 2",
                    "B. B WEST AVE 2, 4",
                    "B. B WEST AVE 7",
                    "TECK WHYE AVE"
                ],
                scrollFont: "Arial-8"
            },
            pids: {
                renderType: "pids",
                serviceNumber: "985",
                destination: "CHOA CHU KANG INT",
                scrolls: [
                    "LOR 1 GEYLANG TER",
                    "KALLANG STN/OPP BLK 2C",
                    "OPP KALLANG PL",
                    "BLK 7",
                    "BOON KENG STN/BLK 102",
                    "OPP BENDEMEER PR SCH",
                    // "ST. MICHAEL'S PL",
                    "AFT MOONSTONE LANE",
                    // "OPP ST. ANDREW'S VILLAGE",
                    "OPP BLK 195",
                    "OPP TRELLIS TWRS",
                    "CATHOLIC JC",
                    "OPP BT TIMAH PLAZA",
                    "PEI HWA PRESBY PR SCH",
                    "BEAUTY WORLD STN EXIT C",
                    "BLK 18",
                    "SIGNATURE PK CONDO",
                    "OPP THE HILLFORD",
                    "BEF BT BATOK EAST AVE 6",
                    "OPP AUTOBACS",
                    "BLK 267",
                    "BLK 258",
                    "BLK 242",
                    "BLK 240",
                    "BLK 628",
                    "BEF BT BATOK WEST AVE 5",
                    "OPP BLK 305",
                    "OPP BLK 315",
                    "BLK 419",
                    "OPP BLK 336",
                    "HOMETEAMNS",
                    "BT BATOK DRIVING CTR",
                    "AFT BT BATOK WEST AVE 5",
                    "OPP BT BATOK FIRE STN",
                    "BLK 26",
                    "BET BLKS 13/14",
                    "BLK 8",
                    "OPP CCK POLYCLINIC",
                    "AFT BLK 202",
                    "CHOA CHU KANG INT"
                ]
            }
        }
    },
};

EDSImages.SMRT = {
    "logo": [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
}
