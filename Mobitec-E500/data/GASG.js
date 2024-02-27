EDSFormats.GASG = {
    standardService: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "Mobitec-16:8:Bold",
            spacing: 2
        },
        destination: {
            align: "centre-x,top",
            margin: {
                right: 'width(serviceNumber)'
            },
            text: "$destination.text",
            font: "$destination.font",
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
        text: "$serviceNumber+' '+$destination.text"
    },
    destScroll: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "Mobitec-16:8:Bold",
            spacing: {
                $$cond: {
                    "$spacing === null" : 2,
                    "else": "$spacing"
                }
            }
        },
        top: {
            align: {
                $$cond: {
                    "$bottom === null": "centre-x,centre-y",
                    "else": "centre-x,top"
                }
            },
            text: "$top",
            font: "$topFont",
            spacing: 1,
            margin: {
                right: 'width(serviceNumber)'
            }
        },
        bottom: {
            align: "centre-x,bottom",
            text: {
                $$cond: {
                    "$bottom !== null": "$bottom",
                    "else": "''"
                }
            },
            font: {
                $$cond: {
                    "$bottomFont !== null": "$bottomFont",
                    "else": "Mobitec-6:5"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber)'
            }
        },

        text: "$top+' '+$bottom+' '+$serviceNumber"
    },
    message: {
        display: {
            align: "centre-x,centre-y",
            text: "$text",
            font: "$font",
            spacing: "$spacing"
        },

        text: "$text"
    }
}

EDSData.GASG = {
 
    21: {
        front: {
            renderType: "standardService",
            serviceNumber: "2",
            destination: {
                text: "KAMPONG BAHRU",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "2",
                    top: "KAMPONG BAHRU",
                    topFont: "Mobitec-13:7"
                },
                "LOYANG AVE"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    22: {
        front: {
            renderType: "standardService",
            serviceNumber: "2",
            destination: {
                text: "CHANGI VILLAGE",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "2",
                    top: "CHANGI VILLAGE",
                    topFont: "Mobitec-13:7"
                },
                "LOYANG AVE"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    31: {
        front: {
            renderType: "standardService",
            serviceNumber: "3",
            destination: {
                text: "TAMPINES",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "3",
                    top: "TAMPINES",
                    topFont: "Mobitec-13:7"
                },
                "PUNGGOL CENTRAL / FIELD",
                "TAMPINES EXPRESSWAY",
                "PASIR RIS DR 12 / 1 / 10",
                "PASIR RIS ST 71",
                "PASIR RIS INT",
                "PASIR RIS DR 3 / ST 21",
                "TAMPINES EAST MRT",
                "TAMPINES ST 21"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    32: {
        front: {
            renderType: "standardService",
            serviceNumber: "3",
            destination: {
                text: "PUNGGOL",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "3",
                    top: "PUNGGOL",
                    topFont: "Mobitec-13:7"
                },
                "TAMPINES ST 21",
                "TAMPINES EAST MRT",
                "PASIR RIS ST 21 / DR 3",
                "PASIR RIS ST 71",
                "PASIR RIS DR 10 / 1 / 12", 
                "TAMPINES EXPRESSWAY",
                "PUNGGOL FIELD / CENTRAL"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    61: {
        front: {
            renderType: "standardService",
            serviceNumber: "6",
            destination: {
                text: "PASIR RIS",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "6",
                    top: "PASIR RIS",
                    topFont: "Mobitec-13:7"
                },
                "PASIR RIS DR 3",
                "LOYANG AVE",
                "LOYANG WAY",
                "LOYANG CRES (LOOP)"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    121: {
        front: {
            renderType: "standardService",
            serviceNumber: "12",
            destination: {
                text: "KAMPONG BAHRU",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "12",
                    top: "KAMPONG BAHRU",
                    topFont: "Mobitec-13:7"
                },
                "TANAH MERAH MRT"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    122: {
        front: {
            renderType: "standardService",
            serviceNumber: "12",
            destination: {
                text: "PASIR RIS",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "12",
                    top: "PASIR RIS",
                    topFont: "Mobitec-13:7"
                },
                "CHINATOWN / CLARKE QUAY MRT",
                "VICTORIA ST / BUGIS",
                "LAVENDER / KALLANG MRT",
                "MOUNTBATTEN RD / MRT",
                "EAST COAST RD",
                "BEDOK SOUTH RD",
                "TANAH MERAH MRT",
                "SIMEI RD",
                "TAMPINES EAST MRT",
                "PASIR RIS ST 12 / 13",
                "PASIR RIS DR 1 / 6 / 3"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    151: {
        front: {
            renderType: "standardService",
            serviceNumber: "15",
            destination: {
                text: "MARINE PARADE",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "15",
                    top: "MARINE PARADE",
                    topFont: "Mobitec-13:7"
                },
                "PASIR RIS ST 52, DR 1 / 8",
                "TAMPINES AVE 12/7/4/5/1",
                "BEDOK NORTH RD",
                "BEDOK RESERVOIR RD",
                "JALAN EUNOS / MRT",
                "STILL RD",
                "TELOK KURAU RD",
                "JOO CHIAT PLACE"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    152: {
        front: {
            renderType: "standardService",
            serviceNumber: "15",
            destination: {
                text: "PASIR RIS",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "15",
                    top: "PASIR RIS",
                    topFont: "Mobitec-13:7"
                },
                "JOO CHIAT PLACE",
                "STILL RD",
                "JALAN EUNOS / MRT",
                "BEDOK RESERVOIR RD",
                "BEDOK NORTH RD",
                "TAMPINES WEST MRT",
                "TAMPINES AVE 1/5/4/7/12",
                "PASIR RIS DR 8 / 1, ST 52"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    171: {
        front: {
            renderType: "standardService",
            serviceNumber: "17",
            destination: {
                text: "BEDOK",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "17",
                    top: "BEDOK",
                    topFont: "Mobitec-13:7"
                },
                "PASIR RIS DR 3 / 4",
                "PASIR RIS ST 12 / 11",
                "TAMPINES AVE 7 / 2",
                "TAMPINES EAST MRT",
                "SIMEI AVE",
                "BEDOK NORTH AVE 4",
                "BEDOK NORTH RD"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    172: {
        front: {
            renderType: "standardService",
            serviceNumber: "17",
            destination: {
                text: "PASIR RIS",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "17",
                    top: "PASIR RIS",
                    topFont: "Mobitec-13:7"
                },
                "BEDOK NORTH RD",
                "BEDOK NORTH AVE 4",
                "SIMEI AVE",
                "TAMPINES EAST MRT",
                "TAMPINES AVE 2 / 7",
                "PASIR RIS ST 11 / 12",
                "PASIR RIS DR 4 / 3",
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    341: {
        front: {
            renderType: "standardService",
            serviceNumber: "34",
            destination: {
                text: "CHANGI AIRPORT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "34",
                    top: "CHANGI AIRPORT",
                    topFont: "Mobitec-13:7"
                },
                "PUNGGOL RD",
                "TAMPINES EXPRESSWAY",
                "TAMPINES AVE 10 / 5 / 2",
                "TAMPINES EAST MRT"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    342: {
        front: {
            renderType: "standardService",
            serviceNumber: "34",
            destination: {
                text: "PUNGGOL",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "34",
                    top: "PUNGGOL",
                    topFont: "Mobitec-13:7"
                },
                "TAMPINES EAST MRT",
                "TAMPINES AVE 2 / 5 / 10",
                "TAMPINES EXPRESSWAY",
                "PUNGGOL RD"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    361: {
        front: {
            renderType: "standardService",
            serviceNumber: "36",
            destination: {
                text: "TOMLINSON RD",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "36",
                    top: "TOMLINSON RD",
                    topFont: "Mobitec-13:7"
                },
                "MARINE PARADE RD",
                "SUNTEC CITY",
                "STAMFORD RD",
                "DHOBY GHAUT MRT",
                "SOMERSET MRT",
                "ORCHARD BOULEVARD"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    362: {
        front: {
            renderType: "standardService",
            serviceNumber: "36",
            destination: {
                text: "CHANGI AIRPORT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "36",
                    top: "CHANGI AIRPORT",
                    topFont: "Mobitec-13:7"
                },
                "ORCHARD RD",
                "BRAS BASAH RD",
                "SUNTEC CITY",
                "MARINE PARADE RD",
                "SIGLAP RD / LINK"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    681: {
        front: {
            renderType: "standardService",
            serviceNumber: "68",
            destination: {
                text: "TAMPINES",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "68",
                    top: "TAMPINES",
                    topFont: "Mobitec-13:7"
                },
                "ELIAS RD",
                "PASIR RIS ST 71",
                "TAMPINES AVE 10",
                "TAMPINES AVE 11",
                "TAMPINES AVE 6",
                "TAMPINES CONCOURSE"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    682: {
        front: {
            renderType: "standardService",
            serviceNumber: "68",
            destination: {
                text: "PASIR RIS",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "68",
                    top: "PASIR RIS",
                    topFont: "Mobitec-13:7"
                },
                "TAMPINES CONCOURSE",
                "TAMPINES AVE 6",
                "TAMPINES AVE 11",
                "TAMPINES AVE 10",
                "PASIR RIS ST 71",
                "ELIAS RD"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    1111: {
        front: {
            renderType: "destScroll",
            top: "Sorry!",
            topFont: "Mobitec-7:7",

            bottom: "Not In Service",
            bottomFont: "Mobitec-7:7",

            serviceNumber: ""
        }
    },
    2222: {
        front: {
            renderType: "message",
            text: "Go Ahead Singapore",
            font: "Mobitec-13:8",
            spacing: 1
        }
    },
    3541: {
        front: {
            renderType: "standardService",
            serviceNumber: "354",
            destination: {
                text: "PASIR RIS INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "354",
                    top: "PASIR RIS",
                    topFont: "Mobitec-13:7"
                },
                "DOWNTOWN EAST",
                "JALAN LOYANG BESAR",
                "PASIR RIS DR 3"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    3841: {
        front: {
            renderType: "standardService",
            serviceNumber: "384",
            destination: {
                text: "PUNGGOL INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "384",
                    top: "PUNGGOL",
                    topFont: "Mobitec-13:7"
                },
                "PUNGGOL CENTRAL",
                "PUNGGOL WAY",
                "NORTHSHORE DRIVE"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    4031: {
        front: {
            renderType: "standardService",
            serviceNumber: "403",
            destination: {
                text: "PASIR RIS INT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "403",
                    top: "PASIR RIS",
                    topFont: "Mobitec-13:7"
                },
                "PASIR RIS DR 8 / 1",
                "ELIAS RD",
                "PASIR RIS RD",
                "PASIR RIS PARK"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    9998: {
        front: {
            renderType: "destScroll",
            top: "Go Ahead Singapore",
            topFont: "Mobitec-7:5:2",

            bottom: "Fonts and scrolls are still WIP",
            bottomFont: "Mobitec-7:4",

            serviceNumber: ""
        }
    },
    9999: {
        front: {
            renderType: "message",
            text: "VER.10JUN19-DD",
            font: "Mobitec-16:8",
            spacing: 1
        }
    },
}

EDSExtras.GASG = {}

EDSImages.GASG = {
}
