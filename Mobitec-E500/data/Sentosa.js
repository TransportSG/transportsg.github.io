EDSFormats.Sentosa = {
    standardService: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "Mobitec-16:8",
            spacing: 2
        },
        destination: {
            align: "centre-x,top",
            margin: {
                right: 'width(serviceNumber)'
            },
            text: "$destination",
            font: "Mobitec-7:7",
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

            font: "Mobitec-7:4",
            spacing: 1
        },

        text: "$destination.text+' '+$serviceNumber"
    },
    destScroll: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "Mobitec-16:8",
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

EDSData.Sentosa = {
    1: {
        front: {
            renderType: "standardService",
            serviceNumber: "A",
            destination: {
                text: "Beach Station",
                font: "Mobitec-7:7"
            },
            scrolls: [
                'via Imbiah Lookout',
                'via Siloso Point',
                'via Village Hotel',
                'via Amara Sanctuary Resort',
                "via Resorts World Sentosa",
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2: {
        front: {
            renderType: "standardService",
            serviceNumber: "B",
            destination: {
                text: "Beach Station",
                font: "Mobitec-7:7"
            },
            scrolls: [
                'via Opp Village Hotel',
                'via Opp Amara Sanctuary',
                'via Sentosa Pavillon',
                'via W Hotel',
                'via Sentosa Cove Village',
                'via Opp Sentosa Pavillon',
                'via Sentosa Golf Club',
                'via Etonhouse',
                'via Palawan Beach',
                'via Opp SO Spa',
                "via Amara Sanctuary Resort",
                "via Village Hotel"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    3: {
        front: {
            renderType: "standardService",
            serviceNumber: "C",
            destination: {
                text: "Beach Station",
                font: "Mobitec-7:7"
            },
            scrolls: [
                'via Resorts World Sentosa',
                'via Amara Sanctuary Resort',
                'via Village Hotel',
                'via Siloso Point',
                "via Imbiah Lookout",
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    4: {
        front: {
            renderType: "destScroll",
            top: "Free Shuttle Service",
            topFont: "Mobitec-7:7",

            bottom: "HarbourFront Bus Int/MRT",
            bottomFont: "Mobitec-7:5:2",

            serviceNumber: ""
        }
    },
    9000: {
        front: {
            renderType: "standardService",
            serviceNumber: "WIP",
            destination: {
                text: "SENTOSA",
                font: "Mobitec-7:7"
            },
            scrolls: [
                'Fonts and data are still WIP',
                'Thanks for your patience'
            ],
            scrollFont: "Mobitec-6:5"
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
    },


EDSExtras.Sentosa = {}

EDSImages.Sentosa = {
}
