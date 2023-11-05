EDSFormats.TTSG = {
    standardService: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: {
                $$cond: {
                    "$serviceFont === null": "LECIP-20:12",
                    "else": "$serviceFont"
                }
            },
            spacing: 3
        },
        destination: {
            align: "centre-x,top",
            margin: {
                right: 'width(serviceNumber)'
            },
            text: "$destination",
            font: "$destinationFont",
            spacing: 1
        },
        scroll: {
            align: "centre-x,bottom",
            margin: {
                right: 'width(serviceNumber)'
            },
            scrolls: "$scrolls",
            rotate: true,
            rotateSpeed: 3000,

            font: "$scrollFont",
            spacing: 1
        },

        text: "$destination"
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
    twoline: {
        top: {
            align: "centre-x,top",
            text: "$top",
            font: "$topFont",
            spacing: "$topSpacing",
            margin: {
                top: 1
            }
        },
        bottom: {
            align: "centre-x,bottom",
            text: "$bottom",
            font: "$bottomFont",
            spacing: "$bottomSpacing",
            margin: {
                bottom: 1
            }
        },
        text: "$top"
    },
    rearService: {
        serviceNumber: {
            align: "centre-x,centre-y",
            text: "$serviceNumber",
            font: "$font",
            spacing: "$spacing"
        },

        text: "$serviceNumber"
    }
}

EDSData.TTSG = {   
    77: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "77",
                destination: "MARINA CENTRE",
                destinationFont: "LECIP-10",
                scrolls: [
                    "STAMFORD RD",
                    "ORCHARD BOULEVARD",
                    "HOLLAND RD / VILLAGE",
                    "SIXTH AVE",
                    "TOH TUCK RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "77",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
        ,
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "77",
                destination: "BUKIT BATOK",
                destinationFont: "LECIP-10",
                scrolls: [
                    "STAMFORD RD",
                    "ORCHARD BOULEVARD",
                    "HOLLAND RD / VILLAGE",
                    "SIXTH AVE",
                    "TOH TUCK RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "77",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    106: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "106",
                destination: "SHENTON WAY",
                destinationFont: "LECIP-10",
                scrolls: [
                    "COMMONWEALTH AVE WEST",
                    "HOLLAND VILLAGE / RD",
                    "ORCHARD RD",
                    "BAYFRONT AVE / MBS"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "106",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "106",
                destination: "BUKIT BATOK",
                destinationFont: "LECIP-10",
                scrolls: [
                    "CENTRAL BOULEVARD",
                    "BAYFRONT AVE / MBS",
                    "ORCHARD BOULEVARD",
                    "HOLLAND RD / VILLAGE",
                    "COMMONWEALTH AVE WEST"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "106",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    171: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "171",
                destination: "BUKIT PANJANG MRT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "YISHUN AVE 5",
                    "SEMBAWANG RD",
                    "MANDAI RD",
                    "PETIR RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "171",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "171",
                destination: "YISHUN",
                destinationFont: "LECIP-10",
                scrolls: [
                    "PETIR RD",
                    "MANDAI RD",
                    "SEMBAWANG RD",
                    "YISHUN AVE 5"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "171",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    284: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "284",
                destination: "CLEMENTI",
                destinationFont: "LECIP-10",
                scrolls: [
                    "CLEMENTI AVE 4"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "284",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    825: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "825",
                destination: "YIO CHU KANG",
                destinationFont: "LECIP-10",
                scrolls: [
                    "ANG MO KIO AVE 6",
                    "LENTOR MRT",
                    "LENTOR RD",
                    "LENTOR LOOP"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "825",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    858: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "858",
                destination: "CHANGI AIRPORT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "WOODLANDS AVE 9",
                    "SEMBAWANG WAY",
                    "YISHUN MRT",
                    "JALAN KAYU",
                    "T P E"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "858",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "858",
                destination: "WOODLANDS",
                destinationFont: "LECIP-10",
                scrolls: [
                    "T P E",
                    "JALAN KAYU",
                    "YISHUN MRT",
                    "SEMBAWANG WAY",
                    "WOODLANDS 9"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "858",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },   
    "859A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "859A",
                destination: "YISHUN",
                destinationFont: "LECIP-10",
                scrolls: [
                    "CANBERRA RD",
                    "ADMIRALTY LINK",
                    "ADMIRALTY DR",
                    "SEMBWAWANG CRES"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "859A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "859B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "859B",
                destination: "YISHUN",
                destinationFont: "LECIP-10",
                scrolls: [
                    "SEMBAWANG CRES",
                    "ADMIRALTY DR",
                    "ADMIRALTY LINK",
                    "CANBERRA RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "859B",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    870: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "870",
                destination: "TENGAH",
                destinationFont: "LECIP-10",
                scrolls: [
                    "BUKIT BATOK AVE 1",
                    "BUKIT BATOK WEST AVE 6",
                    "BUKIT BATOK WEST AVE 3",
                    "PLANTATION CRESCENT"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "870",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "870",
                destination: "JUR TOWN HALL",
                destinationFont: "LECIP-10",
                scrolls: [
                    "BUKIT BATOK WEST AVE 3",
                    "BUKIT BATOK WEST AVE 6",
                    "BUKIT BATOK AVE 1"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "870",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    992: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "992",
                destination: "TENGAH",
                destinationFont: "LECIP-10",
                scrolls: [
                    "BUKIT BATOK WEST AVE 6",
                    "BUKIT BATOK WEST AVE 8",
                    "BUKIT BATOK RD",
                    "PLANTATION CRESCENT"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "992",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "992",
                destination: "BUKIT BATOK",
                destinationFont: "LECIP-10",
                scrolls: [
                    "PLANTATION CRESCENT",
                    "BUKIT BATOK RD",
                    "BUKIT BATOK WEST AVE 8",
                    "BUKIT BATOK WEST AVE 6"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "992",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    6666: {
        1: {
            front: {
                renderType: "twoline",
                top: "TOWER TRANSIT SG",
                topFont: "LECIP-10",
                topSpacing: 1,

                bottom: "(FONTS ARE STILL WIP)",
                bottomFont: "LECIP-7:5",
                bottomSpacing: 1,
            },
            rear: { 
                renderType: "twoline",
                top: "TOWER",
                topFont: "LECIP-6:3",
                topSpacing: 1,

                bottom: "TRANSIT",
                bottomFont: "LECIP-6:4",
                bottomSpacing: 1,
            }
        }
    },
    9052: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "S52",
                destination: "TEL SHUTTLE",
                destinationFont: "LECIP-10",
                scrolls: [
                    "TO WOODLANDS NORTH"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "S52",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "S52",
                destination: "TEL SHUTTLE",
                destinationFont: "LECIP-10",
                scrolls: [
                    "TO CALDECOTT"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "S52",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    }
}

EDSImages.TTSG = {
}
