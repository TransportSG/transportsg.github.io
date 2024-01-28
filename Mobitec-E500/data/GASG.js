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
            text: "$destination.text+' via'",
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
    151: {
        front: {
            renderType: "standardService",
            serviceNumber: "15",
            destination: {
                text: "MARINE PARADE",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "PASIR RIS ST 52, DR 1 / 8",
                "TAMPINES AVE 12 / 7 / 4 / 5 / 1",
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
                "JOO CHIAT PLACE",
                "STILL RD",
                "JALAN EUNOS / MRT",
                "BEDOK RESERVOIR RD",
                "BEDOK NORTH RD",
                "TAMPINES WEST MRT",
                "TAMPINES AVE 1 / 5 / 4 / 7 / 12",
                "PASIR RIS DR 8/1, ST 52"
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
                "ORCHARD RD",
                "BRAS BASAH RD",
                "SUNTEC CITY",
                "MARINE PARADE RD",
                "SIGLAP RD / LINK"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    365: {
        front: {
            renderType: "standardService",
            serviceNumber: "36T",
            destination: {
                text: "ENDS AT",
                font: "Mobitec-7:7"
            },
            scrolls: [
                "CHANGI AIRPORT T2"
            ],
            scrollFont: "Mobitec-7:4"
        }
    },
    1111: {
        front: {
            renderType: "message",
            text: "OFF SERVICE",
            font: "Mobitec-16:8",
            spacing: 1
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
                "PASIR RIS DR 8 / 1",
                "ELIAS RD",
                "PASIR RIS RD",
                "PASIR RIS PARK"
            ],
            scrollFont: "Mobitec-7:4"
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
