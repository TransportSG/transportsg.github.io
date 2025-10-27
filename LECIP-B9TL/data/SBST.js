EDSFormats.SBST = {
    standardService: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0
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
            align: "left,bottom",
            margin: {
                bottom: {
                    $$cond: {
                        "$destinationFont === 'LECIP-6:3'": 3,
                        "$destinationFont === 'LECIP-6:4'": 3,
                        "$destinationFont === 'LECIP-7:5'": 2,
                        "$destinationFont === 'LECIP-9:3'": 0,
                        "$destinationFont === 'LECIP-10'": 0
                    }
                },
            },
            text: "$destination",
            font: "$destinationFont",
            spacing: {
                $$cond: {
                    "$destinationFont === 'LECIP-10'": 2,
                    "else": 1
                }
            }
        },
        scroll: {
            align: "left,top",
            margin: {
                top: {
                    $$cond: {
                        "$destinationFont === 'LECIP-6:3'": 2,
                        "$destinationFont === 'LECIP-6:4'": 2,
                        "else": 1
                    }
                }
            },
            scrolls: "$scrolls",
            rotate: true,
            rotateSpeed: 2600,

            font: "$scrollFont",
            spacing: 1
        },

        text: "$destination"
    },
    destScroll: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0,
                top: 0
            },
            text: "$serviceNumber",
            font: {
                $$cond: {
                    "$serviceFont === null": "LECIP-20:12",
                    "else": "$serviceFont"
                }
            },
            spacing: {
                $$cond: {
                    "$spacing === null" : "3",
                    "else": "$serviceSpacing"
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
                    "else": "ArialBold-8:2"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber)',
                bottom: 1
            }
        },

        text: "$top+' '+$bottom+' '+$serviceNumber"
    },
    logo: {
        logo: {
            align: "centre-x,bottom",
            image: "$image"
        },

        text: "$text"
    },
    destScroll2: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0,
                top: 0
            },
            text: "$serviceNumber",
            font: {
                $$cond: {
                    "$serviceFont === null": "LECIP-20:12",
                    "else": "$serviceFont"
                }
            },
            spacing: {
                $$cond: {
                    "$serviceSpacing === null" : "1",
                    "else": "$serviceSpacing"
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
                    "else": "ArialBold-8:2"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber)',
                bottom: 1
            }
        },

        text: "$top+' '+$bottom+' '+$serviceNumber"
    },
    logo: {
        logo: {
            align: "centre-x,bottom",
            image: "$image"
        },

        text: "$text"
    },
destScroll2A: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0,
                top: 0
            },
            text: "$serviceNumber",
            font: {
                $$cond: {
                    "$serviceFont === null": "LECIP-20:12",
                    "else": "$serviceFont"
                }
            },
            spacing: {
                $$cond: {
                    "$serviceSpacing === null" : "3",
                    "else": "$serviceSpacing"
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
                    "else": "ArialBold-8:2"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber)',
                bottom: 1
            }
        },

        text: "$top+' '+$bottom+' '+$serviceNumber"
    },
    logo: {
        logo: {
            align: "centre-x,bottom",
            image: "$image"
        },

        text: "$text"
    },
    destScroll3: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0,
                top: 0
            },
            text: "$serviceNumber",
            font: {
                $$cond: {
                    "$serviceFont === null": "LECIP-20:12",
                    "else": "$serviceFont"
                }
            },
            spacing: {
                $$cond: {
                    "$spacing === null" : "3",
                    "else": "$serviceSpacing"
                }
            }
        },
        top: {
            align: {
                $$cond: {
                    "$bottom === null": "centre-x,centre-y",
                    "else": "centre-x,top",
                    top: "3",
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
                    "else": "ArialBold-8:2"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber)',
                bottom: '3'
            }
        },

        text: "$top+' '+$bottom+' '+$serviceNumber"
    },
    logo: {
        logo: {
            align: "centre-x,bottom",
            image: "$image"
        },

        text: "$text"
    },
    logoSvc: {
        logo: {
            align: "left",
            image: "$image",
        },
        serviceNumber: {
            align: "right",
            text: "$serviceNumber",
            font: "LECIP-20:12",
            spacing: 3
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
    'on-demand': {
        serviceNumber: {
            align: 'right,centre-y',
            margin: {
                right: 5
            },
            text: '$serviceNumber',
            font: 'LECIP-14:7',
            spacing: 2
        },
        title: {
            align: 'centre-x,top',
            margin: {
                right: 'width(serviceNumber) len(5)',
                top: 3
            },
            text: 'ON-DEMAND PUBLIC BUS',
            font: 'LECIP-6:4',
            spacing: 1
        },
        area: {
            align: 'centre-x,bottom',
            margin: {
                right: 'width(serviceNumber) len(5)',
                bottom: 2
            },
            text: '$area',
            font: 'LECIP-6:4',
            spacing: 1
        }
    },
    'centreMessageServiceScroll': {
        serviceNumber: {
            align: 'right,centre-y',
            margin: {
                right: 0,
            },
            text: '$serviceNumber',
            font: 'LECIP-20:12',
            spacing: 3
        },
        top: {
            align: 'centre-x,top',
            margin: {
                right: 'width(serviceNumber) len(2)',
                top: 1
            },
            text: '$top',
            font: '$topFont',
            spacing: 1
        },
        bottom: {
            align: 'centre-x,bottom',
            margin: {
                right: 'width(serviceNumber) len(2)',
                bottom: 1
            },
            text: '$bottom',
            font: '$bottomFont',
            spacing: 1
        }
    },
    brandedSvc: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0,
            },
            text: "$serviceNumber",
            font: "LECIP-20:12",
            spacing: 3
        },
        branding: {
            align: "left",
            margin: {
                left: 1
            },
            text: "$branding",
            font: "$font",
            spacing: '$spacing'
        }
    },
    brandedSvc2: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0
            },
            text: "$serviceNumber",
            font: "LECIP-20:12",
            spacing: 3
        },
        branding: {
            align: "left",
            margin: {
                left: 1,
                top: 3
            },
            text: "$branding",
            font: "$font",
            spacing: '$spacing'
        }
    },
    brandedSvc3: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0,
            },
            text: "$serviceNumber",
            font: "LECIP-20:12",
            spacing: 2
        },
        branding: {
            align: "left",
            margin: {
                left: 1
            },
            text: "$branding",
            font: "$font",
            spacing: '$spacing'
        }
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
    twoline2: {
        top: {
            align: "centre-x,top",
            text: "$top",
            font: "$topFont",
            spacing: {
                top: {
                $$cond: {
                    "$spacingTop === undefined": 2,
                    "else": "$spacingTop"
                }
            },
            },
            margin: {
                top: {
                $$cond: {
                    "$marginTop === undefined": 0,
                    "else": "$marginTop"
                }
            },
            left: {
                $$cond: {
                    "$marginLeft === undefined": 0,
                    "else": "$marginLeft"
                }
            }
        },
    },
        bottom: {
            align: "centre-x,bottom",
            text: "$bottom",
            font: "$bottomFont",
            spacing: "$bottomSpacing",
            margin: {
                top: {
                    $$cond: {
                        "$marginBottom === undefined": 0,
                        "else": "$marginBottom"
                    }
                },
                left: {
                    $$cond: {
                        "$marginLeft === undefined": 0,
                        "else": "$marginLeft"
                    }
                }
            },
        },
        text: "'top+' '+$bottom'"
    },
    twoline3: {
        serviceNumber: {
            align: 'right,centre-y',
            margin: {
                right: 0
            },
            text: '$serviceNumber',
            font: 'LECIP-20:12',
            spacing: 3
        },
        top: {
            align: "left,top",
            text: "$top",
            font: "$topFont",
            spacing: {
                top: {
                $$cond: {
                    "$spacingTop === undefined": 2,
                    "else": "$spacingTop"
                }
            },
            },
            margin: {
                top: {
                $$cond: {
                    "$marginTop === undefined": 0,
                    "else": "$marginTop"
                }
            },
            left: {
                $$cond: {
                    "$marginLeft === undefined": 0,
                    "else": "$marginLeft"
                }
            }
        },
    },
        bottom: {
            align: "left,bottom",
            text: "$bottom",
            font: "$bottomFont",
            spacing: "$bottomSpacing",
            margin: {
                top: {
                    $$cond: {
                        "$marginBottom === undefined": 0,
                        "else": "$marginBottom"
                    }
                },
                left: {
                    $$cond: {
                        "$marginLeft === undefined": 0,
                        "else": "$marginLeft"
                    }
                }
            },
        },
        text: "'top+' '+$bottom'"
    },
    rearService: {
        serviceNumber: {
            align: "centre-x,centre-y",
            text: "$serviceNumber",
            font: "$font",
            spacing: "$spacing"
        },

        text: "$serviceNumber"
    },
    mrtPrototype: {
        station: {
            align: 'centre-x,top',
            margin: {
                top: 1
            },
            text: '$station',
            font: 'LECIP-10',
            spacing: 1
        },
        name: {
            align: 'centre-x,bottom',
            margin: {
                bottom: 1
            },
            text: 'FREE TRAIN REPLACEMENT',
            font: 'LECIP-6:4',
            spacing: 1
        },
    },
    full: {
        __dynamic__: (matrix, data) => {
            matrixPrimitives.setStrokeColour(null);
            matrixPrimitives.fillRectangle(matrix, 0, 0, matrix.width, matrix.height);
        },
        text: "FULL"
    },
    ChingaystandardService: { // wording: hano ; num: lecip  -  because sbs kecoh af
        serviceNumber: {
            align: "right",
            margin: {
                right: 0
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
            align: "left,bottom",
            margin: {
                bottom: {
                    $$cond: {
                        "$destinationFont === 'Hanover-8'": 2,
                        "$destinationFont === 'Hanover-10'": 1
                    }
                },
            },
            text: "$destination",
            font: "$destinationFont",
            spacing: {
                $$cond: {
                    "$destinationFont === 'Hanover-10'": 2,
                    "else": 1
                }
            }
        },
        scroll: {
            align: "left,top",
            margin: {
                top: {
                    $$cond: {
                        "$destinationFont === 'LECIP-6:3'": 2,
                        "$destinationFont === 'LECIP-6:4'": 2,
                        "else": "0"
                    }
                }
            },
            scrolls: "$scrolls",
            rotate: true,
            rotateSpeed: 2600,

            font: "$scrollFont",
            spacing: 1
        },

        text: "$destination"
    },
    swt: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0
            },
            text: "$serviceNumber",
            font: "LECIP-20:12",
            spacing: 3
        },
        terminateAt: {
            align: "centre-x,top",
            margin: {
                top: 2,
                right: "width(serviceNumber)"
            },
            text: {
                $$cond: {
                    "$terminateAt === undefined": "TERMINATING AT",
                    "else": "'TERMINATING AT '+$terminateAt"
                }
            },
            font: "LECIP-6:3",
            spacing: 1
        },
        landmark: {
            align: "centre-x,bottom",
            margin: {
                bottom: 3,
                right: "width(serviceNumber)"
            },
            text: "$landmark",
            font: "LECIP-6:3",
            spacing: 1
        },

        text: {
            $$cond: {
                "$terminateAt === undefined": "'TERMINATING AT '+$landmark",
                "else": "'TERMINATING AT '+$terminateAt+' '+$landmark"
            }
        }
    }
}

EDSData.SBST = {
    // "1": {
    //     1: {
    //         front: {
    //             renderType: "mrtPrototype",
    //             station: "ANG MO KIO"
    //         }
    //     }
    // },
    1: {
        1: {
            front: {
                renderType: "full"
            },
            rear: {
                renderType: "full"
            }
        },
        2: {
            front: {
                renderType: "message",
                text: "ALL",
                font: "LECIP-20:12",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "ALL",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "1L": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "LCS1",
                destination: "> CHANGI AIRFREIGHT CTR",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    'TAMPINES AVE 3',
                    'TAMPINES AVE 5',
                    'LOYANG WAY',
                    'ALPS AVE',
                    'AIRPORT CARGO RD',
                    'AIRLINE RD'
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "LCS1",
                font: "LECIP-20:6",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "LCS1",
                destination: "> TAMPINES AVE 9",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'AIRPORT CARGO RD',
                    'AIRLINE RD',
                    'ALPS AVE',
                    'LOYANG WAY',
                    'TAMPINES AVE 3',
                    'TAMPINES AVE 5'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "LCS1",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "1N": {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "1N",
                branding: "NITE  OWL",
                font: "LECIP-20:12",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "1N",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    2: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "2",
                destination: "> NEW BRIDGE RD",
                destinationFont: "LECIP-10",
                scrolls: [
                    "LOYANG AVE",
                    "UPPER CHANGI RD NORTH",
                    "UPPER CHANGI RD EAST",
                    "NEW UPPER CHANGI RD",
                    "GEYLANG RD",
                    "VICTORIA ST"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "2",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "2",
                destination: "> CHANGI VILLAGE",
                destinationFont: "LECIP-10",
                scrolls: [
                    "VICTORIA ST",
                    "SIMS AVE",
                    "NEW UPPER CHANGI RD",
                    "UPPER CHANGI RD EAST",
                    "UPPER CHANGI RD NORTH",
                    "LOYANG AVE"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "2",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
    },
    "2A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "2A",
                terminateAt: "NEW UPPER CHANGI",
                landmark: "RD (BEDOK STN)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "2A",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "swt",
                serviceNumber: "2A",
                terminateAt: "NEW UPPER CHANGI",
                landmark: "RD (TANAH MERAH STN EXIT A)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "2A",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "2K": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "2",
                destination: "> KAMPONG BAHRU TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "LOYANG AVE",
                    "UPPER CHANGI RD NORTH",
                    "UPPER CHANGI RD EAST",
                    "NEW UPPER CHANGI RD",
                    "GEYLANG RD",
                    "VICTORIA ST"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "2",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "2",
                destination: "> CHANGI VILLAGE TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "VICTORIA ST",
                    "SIMS AVE",
                    "NEW UPPER CHANGI RD",
                    "UPPER CHANGI RD EAST",
                    "UPPER CHANGI RD NORTH",
                    "LOYANG AVE"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "2",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
    },
    "2L": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "LCS2",
                destination: "> CHANGI AIRFREIGHT CTR",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    'PUNGGOL CENTRAL',
                    'LOYANG WAY',
                    'ALPS AVE',
                    'AIRPORT CARGO RD',
                    'AIRLINE RD'
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "LCS2",
                font: "LECIP-20:6",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "LCS2",
                destination: "> PUNGGOL WAY",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'AIRPORT CARGO RD',
                    'AIRLINE RD',
                    'ALPS AVE',
                    'LOYANG WAY',
                    'PUNGGOL CENTRAL',
                    'PUNGGOL WAY'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "LCS2",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "2N": {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "2N",
                branding: "NITE  OWL",
                font: "LECIP-20:12",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "2N",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    3: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "3",
                destination: "> TAMPINES",
                destinationFont: "LECIP-10",
                scrolls: [
                    "PUNGGOL WAY",
                    "PUNGGOL FIELD",
                    "PASIR RIS ST 71",
                    "PASIR RIS DR 3",
                    "PASIR RIS DR 1",
                    "TAMPINES AVE 7",
                    "TAMPINES ST 21"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "3",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "3",
                destination: "> PUNGGOL",
                destinationFont: "LECIP-10",
                scrolls: [
                    "TAMPINES ST 21",
                    "TAMPINES AVE 7",
                    "PASIR RIS DR 1",
                    "PASIR RIS DR 3",
                    "PASIR RIS ST 71",
                    "PUNGGOL FIELD",
                    "PUNGGOL WAY",
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "3",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "3A": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "3A",
                landmark: "PASIR RIS DRIVE 12 (BLK 747A)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "3A",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "3B": {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "3B",
                landmark: "PASIR RIS INT"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "3B",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "3N": {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "3N",
                branding: "NITE  OWL",
                font: "LECIP-20:12",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "3N",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    4: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "4",
                destination: "TAMP INT-CHANGI NTH WAY",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "TAMPINES AVE 7",
                    "FLORA DR",
                    "CHANGI NORTH WAY",
                    "FLORA RD",
                    "TAMPINES AVE 7"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "4",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "4N": {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "4N",
                branding: "NITE  OWL",
                font: "LECIP-20:12",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "4N",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    5: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "5",
                destination: "> BUKIT MERAH INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "UPP CHANGI RD EAST",
                    "BEDOK RESERVOIR RD",
                    "THOMSON RD",
                    "SCOTTS RD",
                    "TIONG BAHRU RD",
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "5",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "5",
                destination: "> PASIR RIS INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "TIONG BAHRU RD",
                    "SCOTTS RD",
                    "THOMSON RD",
                    "BEDOK RESERVOIR RD",
                    "UPP CHANGI RD EAST"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "5",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "5A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "5A",
                destination: "UPPER CHANGI STN",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "5A",
                    terminateAt: "UPP CHANGI RD EAST",
                    landmark: "(UPP CHANGI STN/SUTD)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "5A",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "5B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "5B",
                destination: "MARIAM WAY",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "5B",
                    terminateAt: "MARIAM WAY",
                    landmark: "(BEF MARIAM WK)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "5B",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "5N": {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "5N",
                branding: "NITE  OWL",
                font: "LECIP-20:12",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "5N",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    6: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "6",
                destination: "PASIR RIS - LOYANG CRES",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "PASIR RIS DR 3",
                    "LOYANG AVE",
                    "LOYANG WAY",
                    "LOYANG CRES",
                    "LOYANG WAY",
                    "LOYANG AVE"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "6",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "6N": {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "6N",
                branding: "NITE  OWL",
                font: "LECIP-20:12",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "6N",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    7: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "7",
                destination: "> CLEMENTI INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "CHANGI RD",
                    "GUILLEMARD RD",
                    "NORTH BRIDGE RD",
                    "ORCHARD BOULEVARD",
                    "HOLLAND RD",
                    "ULU PANDAN RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "7",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "7",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "ULU PANDAN RD",
                    "HOLLAND RD",
                    "ORCHARD RD",
                    "VICTORIA ST",
                    "GUILLEMARD RD",
                    "SIMS AVE EAST"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "7",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "7A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "7A",
                destination: "ORCHARD STN",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "7A",
                    terminateAt: "ORCHARD BLVD",
                    landmark: "BEF ORCHARD STN EXIT B"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "7A",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "7B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "7B",
                destination: "DHOBY GHAUT STN",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "7B",
                    terminateAt: "ORCHARD RD",
                    landmark: "DHOBY GHAUT STN"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "7B",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "7N": {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "7N",
                branding: "NITE  OWL",
                font: "LECIP-20:12",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "7N",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    8: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "8",
                destination: "> TOA PAYOH INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "TAMPINES AVE 1",
                    "BEDOK RESERVOIR RD",
                    "UBI AVE 2",
                    'PAYA LEBAR RD',
                    'MACPHERSON RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "8",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "8",
                destination: "> TAMPINES INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "MACPHERSON RD",
                    'PAYA LEBAR RD',
                    'UBI AVE 2',
                    'BEDOK RESERVOIR RD',
                    'TAMPINES AVE 1, 2, 7'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "8",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "8N": {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "8N",
                branding: "NITE  OWL",
                font: "LECIP-20:12",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "8N",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    9: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "9",
                destination: "> CHANGI AIRFREIGHT CTR",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "NEW UPPER CHANGI RD",
                    'SIMEI ST 3',
                    'TAMPINES AVE 2, 7',
                    'LOYANG AVE',
                    'CHANGI CARGO RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "9",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "9",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "AIRPORT CARGO RD",
                    "LOYANG AVE",
                    "TAMPINES AVE 7, 2",
                    "SIMEI ST 3",
                    'NEW UPPER CHANGI RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "9",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "9A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "9A",
                destination: "LOYANG AVE",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "9A",
                    landmark: "LOYANG AVE (BLK 149A)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "9A",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "9B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "9B",
                destination: "AIRLINE RD",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "9B",
                    terminateAt: "AIRLINE RD",
                    landmark: "(3RD CARGO AGENTS)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "9B",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    10: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "10",
                destination: "> KENT RIDGE TER",
                destinationFont: "LECIP-10",
                scrolls: [
                    "EAST COAST RD",
                    'TANJONG KATONG RD',
                    'SHENTON WAY',
                    'PASIR PANJANG RD',
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "10",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "10",
                destination: "> TAMPINES INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "PASIR PANJANG RD",
                    'NICOLL HIGHWAY',
                    'TANJONG KATONG RD',
                    'EAST COAST RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "10",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "10C": {
        1: {
            front: {
                renderType: "ChingaystandardService",
                serviceNumber: "10",
                destination: "> KENT RIDGE TER",
                destinationFont: "Hanover-10",
                scrolls: [
                    {
                        renderType: "destScroll",
                        top: "  ~",
                        topFont: "LECIP-20:12",
                                    
                        serviceNumber: "10",
                    },
                    "EAST COAST RD",
                    'TANJONG KATONG RD',
                    'SHENTON WAY',
                    'PASIR PANJANG RD',
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "10",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "ChingaystandardService",
                serviceNumber: "10",
                destination: "> TAMPINES INT",
                destinationFont: "Hanover-10",
                scrolls: [
                    {
                        renderType: "destScroll",
                        top: "  ~",
                        topFont: "LECIP-20:12",
                                    
                        serviceNumber: "10"
                    },
                    "PASIR PANJANG RD",
                    'NICOLL HIGHWAY',
                    'TANJONG KATONG RD',
                    'EAST COAST RD'
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "10",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "10E": {
        1: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "10e",
                image: "express",
                destination: "EXPRESS 10e"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "10e",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "10e",
                image: "fastForward",
                destination: "FFW 10e"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "10e",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    11: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "11",
                destination: "LOR 1 GEYLANG TER-RHU CROSS",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "SIMS WAY",
                    "STADIUM CRESCENT",
                    "RHU CROSS",
                    "STADIUM WALK",
                    "SIMS WAY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "11",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    12: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "12",
                destination: "> NEW BRIDGE RD",
                destinationFont: "LECIP-10",
                scrolls: [
                    "PASIR RIS DR 4",
                    "TAMPINES AVE 7",
                    "SIMEI RD",
                    "UPPER CHANGI RD EAST",
                    "BEDOK SOUTH RD",
                    "EAST COAST RD",
                    "MOUNTBATTEN RD",
                    "VICTORIA ST"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "12",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "12",
                destination: "> PASIR RIS",
                destinationFont: "LECIP-10",
                scrolls: [
                    "VICTORIA ST",
                    "MOUNTBATTEN RD",
                    "EAST COAST RD",
                    "BEDOK SOUTH RD",
                    "UPPER CHANGI RD EAST",
                    "SIMEI RD",
                    "TAMPINES AVE 7",
                    "PASIR RIS DR 4"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "12",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
    },
    "12K": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "12",
                destination: "> KAMPONG BAHRU TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "PASIR RIS DR 4",
                    "TAMPINES AVE 7",
                    "SIMEI RD",
                    "UPPER CHANGI RD EAST",
                    "BEDOK SOUTH RD",
                    "EAST COAST RD",
                    "MOUNTBATTEN RD",
                    "VICTORIA ST"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "12",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "12",
                destination: "> PASIR RIS INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "VICTORIA ST",
                    "MOUNTBATTEN RD",
                    "EAST COAST RD",
                    "BEDOK SOUTH RD",
                    "UPPER CHANGI RD EAST",
                    "SIMEI RD",
                    "TAMPINES AVE 7",
                    "PASIR RIS DR 4"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "12",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
    },
    13: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "13",
                destination: "> UPP EAST COAST TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "ANG MO KIO AVE 6",
                    'BRADDELL RD',
                    'LAVENDER ST',
                    'SIMS AVE',
                    'UPP EAST COAST RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "13",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "13",
                destination: "> YIO CHU KANG INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "UPP EAST COAST RD",
                    'GEYLANG RD',
                    'LAVENDER ST',
                    'BRADDELL RD',
                    'ANG MO KIO AVE 6, 8'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "13",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "13A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "13A",
                destination: "BISHAN STN",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "13A",
                    landmark: "BISHAN RD (BISHAN STN)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "13A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    14: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "14",
                destination: "> CLEMENTI INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "BEDOK NORTH AVE 3",
                    "UPPER EAST COAST RD", // check order later
                    'EAST COAST RD',
                    "MOUNTBATTEN RD",
                    "COMMONWEALTH AVE WEST"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "14",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "14",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "COMMONWEALTH AVE WEST",
                    "ORCHARD RD",
                    "MOUNTBATTEN RD",
                    "EAST COAST RD",
                    "UPPER EAST COAST RD",
                    "BEDOK NORTH RD" // check
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "14",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "14A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "14A",
                destination: "GRANGE RD",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "14A",
                    landmark: "GRANGE RD (NATL Y. COUNCIL)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "14A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "14B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "14B",
                destination: "UPP EAST COAST RD",
                destinationFont: "LECIP-7:5",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "14B",
                    terminateAt: "UPP EAST COAST RD",
                    landmark: "(OPP EVERGREEN AVE)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "14B",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "14E": {
        1: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "14e",
                image: "express",
                destination: "EXPRESS 14e"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "14e",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "14e",
                image: "fastForward",
                destination: "FFW 14e"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "14e",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    15: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "15",
                destination: "PASIR RIS - MARINE PARADE",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TAMPINES AVE 7",
                    "TAMPINES AVE 1",
                    "KAKI BUKIT AVE 1",
                    "JALAN EUNOS",
                    "TELOK KURAU RD",
                    "MARINE PARADE RD",
                    "TELOK KURAU RD",
                    "JALAN EUNOS",
                    "KAKI BUKIT AVE 1",
                    "TAMPINES AVE 1",
                    "TAMPINES AVE 7",
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "15",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },

    "15A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "15A",
                destination: "JLN EUNOS",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "15A",
                    landmark: "JLN EUNOS (OPP EUNOS STN)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "15A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    16: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "16",
                destination: "> BUKIT MERAH INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "UPP EAST COAST RD",
                    "MARINE PARADE RD",
                    "JOO CHIAT RD",
                    "SOMERSET RD",
                    "TIONG BAHRU RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "16",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "16",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "TIONG BAHRU RD",
                    "ORCHARD RD",
                    "JOO CHIAT RD",
                    "MARINE PARADE RD",
                    "UPP EAST COAST RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "16",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
    },
    "16M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "16M",
                destination: "> BUKIT MERAH INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "UPP EAST COAST RD",
                    "MARINE PARADE RD",
                    "JOO CHIAT RD",
                    "SOMERSET RD",
                    "TIONG BAHRU RD",
                    "JALAN BUKIT MERAH"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "16M",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "16M",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "JALAN BUKIT MERAH",
                    "TIONG BAHRU RD",
                    "ORCHARD RD",
                    "JOO CHIAT RD",
                    "MARINE PARADE RD",
                    "UPP EAST COAST RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "16M",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
    },
    17: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "17",
                destination: "> BEDOK",
                destinationFont: "LECIP-10",
                scrolls: [
                    "PASIR RIS DR 4",
                    "TAMPINES AVE 2",
                    "BEDOK NORTH AVE 4",
                    "BEDOK NORTH RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "17",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "17",
                destination: "> PASIR RIS",
                destinationFont: "LECIP-10",
                scrolls: [
                    "BEDOK NORTH RD",
                    "BEDOK NORTH AVE 4",
                    "TAMPINES AVE 2",
                    "PASIR RIS DR 4"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "17",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
    },
    "17A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "17A",
                destination: "BEDOK NORTH AVE 4",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "17A",
                    terminateAt: "BEDOK NORTH AVE 4",
                    landmark: "(SBST BEDOK NORTH DEPOT)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "17A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    18: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "18",
                destination: "> BEDOK NTH DEPOT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'TAMPINES NORTH DR 1',
                    'TAMPINES AVE 9',
                    'TAMPINES ST 33',
                    'TAMPINES AVE 2',
                    'BEDOK RESERVOIR RD',
                    'BEDOK NORTH AVE 4'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "18",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "18",
                destination: "> TAMPINES NORTH INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "BEDOK NORTH AVE 4",
                    'BEDOK RESERVOIR RD',
                    'TAMPINES AVE 2',
                    'TAMPINES ST 33',
                    'TAMPINES AVE 9',
                    'TAMPINES NORTH DR 1'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "18",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "18B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "18",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "TAMPINES AVE 7",
                    'TAMPINES AVE 2',
                    'BEDOK RESERVOIR RD',
                    'BEDOK INTERCHANGE'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "18",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "18",
                destination: "> TAMPINES CONCOURSE INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "BEDOK INTERCHANGE",
                    'BEDOK RESERVOIR RD',
                    'TAMPINES AVE 2',
                    'TAMPINES AVE 7'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "18",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    19: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "19",
                destination: "> CHANGI AIRFREIGHT CTR",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'TAMPINES AVE 7',
                    "LOYANG AVE",
                    'AIRLINE RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "19",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "19",
                destination: "> TAMPINES INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'AIRLINE RD',
                    'LOYANG AVE',
                    'TAMPINES AVE 7'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "19",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    20: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "20",
                destination: "TAMPINES INT-CHANGI BIZ PK",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TAMPINES AVE 5",
                    "TAMPINES AVE 2",
                    "SIMEI ST 1",
                    "CHANGI STH AVE 2",
                    'CHANGI BIZ PK CTRL 2',
                    'TAMPINES AVE 2',
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "20",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "20A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "20A",
                destination: "EXPO STN",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "20A",
                    terminateAt: "CHANGI STH",
                    landmark: "AVE 1 (EXPO STN EXIT B)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "20A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    21: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "21",
                destination: "> ST. MICHAEL'S TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TAMPINES AVE 7",
                    'BEDOK RESERVOIR RD',
                    'GEYLANG RD',
                    'BOON KENG RD',
                    'MOULMEIN RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "21",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "21",
                destination: "> PASIR RIS INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "BALESTIER RD",
                    "MOULMEIN RD",
                    'SIMS AVE',
                    'BOON KENG RD',
                    'BEDOK RESERVOIR RD',
                    'TAMPINES AVE 7',
                    "PASIR RIS DR 1"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "21",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "21A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "21A",
                destination: "KITCHENER RD",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "21A",
                    landmark: "KITCHENER RD (BEF TAI HOE HTL)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "21A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "21X": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "21X",
                destination: "ST MICHAEL'S TER - NOVENA STN",
                destinationFont: "LECIP-6:4",
                scrolls: [
                {
                    renderType: "centreMessageServiceScroll",

                    top: "ST MICHAEL'S TER -",
                    topFont: "LECIP-7:5",

                    bottom: " NOVENA STN (LOOP)",
                    bottomFont: "LECIP-7:5",

                    serviceNumber: "21X",
                },  
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "21X",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    22: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "22",
                destination: "> EUNOS INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "ANG MO KIO AVE 8",
                    "SERANGOON CTRL",
                    "UPPER PAYA LEBAR RD",
                    "UBI AVE 2",
                    "EUNOS LINK"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "22",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "22",
                destination: "> ANG MO KIO INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "EUNOS LINK",
                    "UBI AVE 2",
                    "UPPER PAYA LEBAR RD",
                    "SERANGOON CTRL",
                    "ANG MO KIO AVE 8"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "22",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "22T": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "22",
                destination: "> TAMPINES INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "ANG MO KIO AVE 8",
                    "SERANGOON CTRL",
                    "UPPER PAYA LEBAR RD",
                    "UBI AVE 2",
                    "BEDOK RESERVOIR RD",
                    "TAMPINES AVE 4"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "22",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "22",
                destination: "> ANG MO KIO INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "TAMPINES AVE 4",
                    "BEDOK RESERVOIR RD",
                    "UBI AVE 2",
                    "UPPER PAYA LEBAR RD",
                    "SERANGOON CTRL",
                    "ANG MO KIO AVE 8"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "22",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    23: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "23",
                destination: "TAMPINES INT-ROCHOR",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TAMPINES AVE 1",
                    "BEDOK NORTH RD",
                    "BENDEMEER RD",
                    "SERANGOON RD",
                    "BEDOK NORTH RD",
                    "TAMPINES AVE 1"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "23",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "23A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "23A",
                destination: "TAMPINES AVE 10",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "23A",
                    terminateAt: "TAMPINES AVE 10",
                    landmark: "(TEMASEK POLY WEST GATE)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "23A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "23C": {
        1: {
            front: {
                renderType: "ChingaystandardService",
                serviceNumber: "23",
                destination: "TAMPINES INT-ROCHOR",
                destinationFont: "Hanover-8",
                scrolls: [
                    {
                    renderType: "destScroll",
                    top: "  ~",
                    topFont: "LECIP-20:12",
                                
                    serviceNumber: "23"
                    },
                    "TAMPINES AVE 1",
                    "BEDOK NORTH RD",
                    "BENDEMEER RD",
                    "SERANGOON RD",
                    "BEDOK NORTH RD",
                    "TAMPINES AVE 1"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "23",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    24: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "24",
                destination: "> CHANGI AIRPORT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'BOUNDARY RD',
                    'UPPER PAYA LEBAR RD',
                    'SIMS AVE',
                    'NEW UPPER CHANGI RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "24",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "24",
                destination: "> ANG MO KIO INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'NEW UPPER CHANGI RD',
                    'GEYLANG RD',
                    'UPPER PAYA LEBAR RD',
                    'BOUNDARY RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "24",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    25: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "25",
                destination: "> UPP EAST COAST TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "ANG MO KIO AVE 3",
                    "HOUGANG AVE 2, 3",
                    "JALAN EUNOS",
                    "SIMS AVE EAST"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "25",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "25",
                destination: "> ANG MO KIO INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "CHANGI RD",
                    "JALAN EUNOS",
                    "HOUGANG AVE 3",
                    "HOUGANG AVE 2",
                    "ANG MO KIO AVE 3"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "25",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    26: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "26",
                destination: "> TOA PAYOH INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'NEW UPPER CHANGI RD',
                    'GEYLANG RD',
                    'KALLANG BAHRU',
                    'JALAN TOA PAYOH'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "26",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "26",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'JALAN TOA PAYOH',
                    'KALLANG BAHRU',
                    'SIMS AVE',
                    'NEW UPPER CHANGI RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "26",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    27: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "27",
                destination: "> CHANGI AIRPORT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'HOUGANG AVE 10, 6',
                    'SENGKANG CTRL',
                    'COMPASSVALE RD',
                    'TAMPINES AVE 10, 9, 7, 4, 5',
                    'AIRPORT BOULEVARD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "27",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "27",
                destination: "> HOUGANG CTRL INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'AIRPORT BOULEVARD',
                    'TAMPINES AVE 5, 4, 7, 9, 10',
                    'COMPASSVALE RD',
                    'SENGKANG CTRL',
                    'HOUGANG AVE 6, 10'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "27",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "27A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "27A",
                destination: "TAMPINES AVE 4",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                   serviceNumber: "27A",
                landmark: "TAMP. AVE 4 (OPP CENTURY SQ)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "27A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    28: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "28",
                destination: "> TOA PAYOH INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'TAMPINES AVE 9, 2',
                    'NEW UPP CHANGI RD',
                    'PAYA LEBAR RD',
                    'BRADDELL RD',
                    'TOA PAYOH LOR 4, 6'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "28",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "28",
                destination: "> TAMPINES INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'TOA PAYOH LOR 6, 4',
                    'BRADDELL RD',
                    'PAYA LEBAR RD',
                    'NEW UPP CHANGI RD',
                    'TAMPINES AVE 2, 9'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "28",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    29: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "29",
                destination: "TAMP INT-CHANGI VILLAGE",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "TAMPINES AVE 9",
                    "OLD TAMPINES RD",
                    "UPPER CHANGI RD NORTH",
                    "NETHERAVON RD",
                    "CHANGI VILLAGE RD",
                    "NETHERAVON RD",
                    "UPPER CHANGI RD NORTH",
                    "OLD TAMPINES RD",
                    "TAMPINES AVE 9"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "29",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },

    "29A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "29A",
                destination: "TAMPINES AVE 7",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "29A",
                    landmark: "TAMPINES AVE 7 (BLK 479D)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "29A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    30: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "30",
                destination: "> BOON LAY INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "CHANGI RD",
                    'TANJONG KATONG RD',
                    'OLD AIRPORT RD',
                    'KEPPEL RD',
                    'TELOK BLANGAH RD',
                    'PASIR PANJANG RD',
                    'WEST COAST RD',
                    'CORPORATION RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "30",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "30",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "COPORATION DR",
                    "WEST COAST RD",
                    "PASIR PANJANG RD",
                    "TELOK BLANGAH RD",
                    "KEPPEL RD",
                    "OLD AIRPORT RD",
                    "SIMS AVE EAST"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "30",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
   "30A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "30A",
                destination: "FORD RD",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "30A",
                    landmark: "FORD RD (OPP FORD GDNS)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "30A",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "30A",
                destination: "> FORT RD",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TERMINATING AT",
                    "BEDOK INT TO",
                    "CHANGI RD",
                    'TANJONG KATONG RD',
                    'OLD AIRPORT RD',
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "30A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
   "30B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "30B",
                destination: "HARBOURFRONT STN",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "30B",
                    terminateAt: "TELOK BLANGAH",
                    landmark: "RD (HARBOURFRONT STN)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "30B",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "30B",
                destination: "> HARBOURFRONT STN",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TERMINATING AT",
                    "BOON LAY INT TO",
                    "COPORATION DR",
                    "WEST COAST RD",
                    "PASIR PANJANG RD",
                    "TELOK BLANGAH RD",
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "30B",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "30C": {
        1: {
            front: {
                renderType: "ChingaystandardService",
                serviceNumber: "30",
                destination: "> BOON LAY INT",
                destinationFont: "Hanover-10",
                scrolls: [
                    {
                        renderType: "destScroll",
                        top: "  ~",
                        topFont: "LECIP-20:12",
                                    
                        serviceNumber: "30"
                    },
                    "CHANGI RD",
                    'TANJONG KATONG RD',
                    'OLD AIRPORT RD',
                    'KEPPEL RD',
                    'TELOK BLANGAH RD',
                    'PASIR PANJANG RD',
                    'WEST COAST RD',
                    'CORPORATION RD'
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "30",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "ChingaystandardService",
                serviceNumber: "30",
                destination: "> BEDOK INT",
                destinationFont: "Hanover-10",
                scrolls: [
                    {
                        renderType: "destScroll",
                        top: "  ~",
                        topFont: "LECIP-20:12",
                                    
                        serviceNumber: "30"
                    },
                    "COPORATION DR",
                    "WEST COAST RD",
                    "PASIR PANJANG RD",
                    "TELOK BLANGAH RD",
                    "KEPPEL RD",
                    "OLD AIRPORT RD",
                    "SIMS AVE EAST"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "30",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "30E": {
        1: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "30e",
                image: "express",
                destination: "EXPRESS 30e"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "30e",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "30e",
                image: "fastForward",
                destination: "FFW 30e"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "30e",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    31: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "31",
                destination: "> TOA PAYOH INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'SIMEI AVE',
                    'BEDOK SOUTH AVE 1',
                    'MARINE PARADE RD',
                    'DUNMAN RD',
                    'SERANGOON RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "31",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "31",
                destination: "> TAMPINES INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'BENDEMEER RD',
                    'DUNMAN RD',
                    'MARINE PARADE RD',
                    'BEDOK SOUTH AVE 1',
                    'SIMEI AVE'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "31",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "31A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "31A",
                destination: "TANAH MERAH STN",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "31A",
                    landmark: "NEW U. CHANGI RD (T. MERAH STN)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "31A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    32: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "32",
                destination: "> BUONA VISTA TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'FRANKEL AVE',
                    'EAST COAST RD',
                    'NORTH BRIDGE RD',
                    'RIVER VALLEY RD',
                    'MARGARET DRIVE',
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "32",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "32",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'MARGARET DR',
                    'RIVER VALLEY RD',
                    'VICTORIA ST',
                    'EASST COAST RD',
                    'FRANKEL AVE'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "32",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    33: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "33",
                destination: "> KENT RIDGE TER",
                destinationFont: "LECIP-10",
                scrolls: [
                    'JOO CHIAT PLACE',
                    'OLD AIRPORT RD',
                    'VICTORIA ST',
                    'NEW BRIDGE RD',
                    'TIONG BAHRU RD',
                    'ALEXANDRA RD',
                    'AYE'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "33",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "33",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'AYE',
                    "ALEXANDRA RD",
                    'TIONG BAHRU RD',
                    "EU TONG SEN ST",
                    'VICTORIA ST',
                    'OLD AIRPORT RD',
                    "JOO CHIAT PLACE"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "33",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "33A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "33A",
                destination: "TIONG BAHRU RD",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "33A",
                    landmark: "TIONG BAHRU RD (BLK 1)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "33A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "33B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "33B",
                destination: "OLD AIRPORT RD",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "33B",
                    terminateAt: "OLD AIRPORT RD",
                    landmark: "(BLK 22)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "33B",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "33B",
                destination: "JOO CHIAT PLACE",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "33B",
                    terminateAt: "JOO CHIAT PL",
                    landmark: "(AFT TEMBELING ST)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "33B",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
    },
    34: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "34",
                destination: "> CHANGI AIRPORT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'PUNGGOL RD',
                    'TAMPINES AVE 10',
                    'TAMPINES AVE 5',
                    "TAMPINES AVE 2",
                    'TAMPINES AVE 7'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "34",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "34",
                destination: "> PUNGGOL",
                destinationFont: "LECIP-10",
                scrolls: [
                    'TAMPINES AVE 7',
                    'TAMPINES AVE 2',
                    'TAMPINES AVE 5',
                    'TAMPINES AVE 10',
                    'PUNGGOL RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "34",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "34A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "34A",
                destination: "TAMPINES AVE 5",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                serviceNumber: "34A",
                terminateAt: "TAMPINES AVE 5",
                landmark: "(OPP TAMPINES STADIUM)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "34A",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
    },
    35: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "35",
                destination: "> ALPS AVE",
                destinationFont: "LECIP-10",
                scrolls: [
                    "NEW UPPER CHANGI RD",
                    "XILIN AVE",
                    "TANAH MERAH FERRY RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "35",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "35",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "TANAH MERAH FERRY RD",
                    "XILIN AVE",
                    "NEW UPPER CHANGI RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "35",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "35M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "35M",
                destination: "> T.MERAH FERRY TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'NEW UPP CHANGI RD',
                    'XILIN AVE'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "35M",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "35M",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'XILIN AVE',
                    'NEW UPP CHANGI RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "35M",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    36: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "36",
                destination: "> TOMLINSON RD",
                destinationFont: "LECIP-10",
                scrolls: [
                    'MARINE PARADE RD',
                    'TEMASEK BOULEVARD',
                    'STAMFORD RD',
                    'SOMERSET RD',
                    "ORCHARD BOULEVARD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "36",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "36",
                destination: "> CHANGI AIRPORT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'TOMLINSON RD',
                    'ORCHARD RD',
                    'TEMASEK BOULEVARD',
                    'TEMASEK AVE',
                    'MARINE PARADE RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "36",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "36A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "36A",
                destination: "TOMLINSON RD",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "36A",
                    terminateAt: "TOMLINSON RD",
                    landmark: "(THE REGENT S'PORE)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "36A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "36B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "36B",
                destination: "SIGLAP RD",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "36B",
                    terminateAt: "SIGLAP RD",
                    landmark: "(OPP MANDARIN GDNS)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "36B",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    37: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "37",
                destination: "TAMP INT-CHANGI NTH CRES",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "TAMPINES AVE 7",
                    "UPPER CHANGI RD NORTH",
                    "CHANGI NORTH ST 1"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "37",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    38: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "38",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'TAMPINES AVE 7, 2',
                    'SIMEI ST 1, 3, 4',
                    'NEW UPP CHANGI RD',
                    'BEDOK SOUTH AVE 3',
                    'BEDOK SOUTH RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "38",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "38",
                destination: "> TAMPINES INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'BEDOK SOUTH RD',
                    'BEDOK SOUTH AVE 3',
                    'NEW UPP CHANGI RD',
                    'SIMEI ST 4, 3, 1',
                    'TAMPINES AVE 2, 7'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "38",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    39: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "39",
                destination: "> YISHUN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "TAMPINES AVE 2",
                    'PASIR RIS DR 1',
                    "JALAN KAYU",
                    "YISHUN AVE 2"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "39",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "39",
                destination: "> TAMPINES CONCOURSE INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "YISHUN AVE 2",
                    "JALAN KAYU",
                    "PASIR RIS DR 1",
                    "TAMPINES AVE 2"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "39",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
    },
    "39A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "39A",
                destination: "JLN KAYU",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "39A",
                    landmark: "JALAN KAYU (AFT SELETAR CAMP)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "39A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "39B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "39B",
                destination: "PASIR RIS STN",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "39B",
                    terminateAt: "PASIR RIS CTRL",
                    landmark: "(PASIR RIS STN EXIT B)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "39B",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    40: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "40",
                destination: "BEDOK INT-MERPATI RD",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'SIGLAP RD',
                    'TANJONG KATONG RD',
                    'MACPHERSON EST',
                    'SIMS AVE'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "40",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    41: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "41",
                destination: "JURONG EAST - JLN ANAK BT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'TOH GUAN RD',
                    'TOH GUAN RD EAST',
                    'TOH TUCK RD',
                    'JALAN JURONG KECHIL'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "41",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    42: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "42",
                destination: "JLN KEMBANGAN-FIDELIO ST",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'LENGKONG TIGA',
                    'LENGKONG EMPAT',
                    'FIDELIO ST',
                    'SIGLAP DR',
                    'FRANKEL AVE'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "42",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    43: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "43",
                destination: "> UPPER EAST COAST",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "SENGKANG EAST RD",
                    'BUANGKOK GREEN',
                    'YIO CHU KANG RD',
                    'UPPER PAYA LEBAR RD',
                    'PAYA LEBAR RD',
                    'TANJONG KATONG RD',
                    'MARINE PARADE RD',
                    'UPP EAST COAST RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "43",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "43",
                destination: "> PUNGGOL",
                destinationFont: "LECIP-10",
                scrolls: [
                    "UPP EAST COAST RD",
                    'MARINE PARADE RD',
                    'TANJONG KATONG RD',
                    'PAYA LEBAR RD',
                    'YIO CHU KANG RD',
                    'BUANGKOK GREEN',
                    'SENGKANG EAST RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "43",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "43E": {
        1: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "43e",
                image: "express",
                destination: "EXPRESS 43e"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "43e",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "43e",
                image: "fastForward",
                destination: "FFW 43e"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "43e",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
   "43A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "43A",
                destination: "SERANGOON STN",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "43A",
                    terminateAt: "SERANGOON",
                    landmark: "CENTRAL (SERANGOON STN)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "43A",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "43A",
                destination: "> SERANGOON CENTRAL",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TERMINATING AT",
                    "PUNGGOL INT TO",
                    "SENGKANG EAST RD",
                    'BUANGKOK GREEN',
                    'YIO CHU KANG RD',
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "43A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "43M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "43M",
                destination: "PUNGGOL-S'GOON CTRL",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "SENGKANG CENTRAL",
                    'BUANGKOK GREEN',
                    'YIO CHU KANG RD',
                    'SERANGOON CENTRAL',
                    'YIO CHU KANG RD',
                    'BUANGKOK GREEN'
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "43M",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    45: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "45",
                destination: "> UPP EAST COAST TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'ANG MO KIO AVE 10',
                    'SERANGOON AVE 2',
                    'LOR AH SOO',
                    'EUNOS LINK',
                    'BEDOK NORTH RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "45",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "45",
                destination: "> OPP YIO CHU KANG STADIUM",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'BEDOK NORTH RD',
                    'EUNOS LINK',
                    'LOR AH SOO',
                    'SERANGOON AVE 2',
                    'ANG MO KIO AVE 10'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "45",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "45A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "45A",
                destination: "SERANGOON STN",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "45A",
                    terminateAt: "S'GOON CTRL",
                    landmark: "(S'GOON STN EXIT A / BLK 413)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "45A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "45Z": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "45",
                destination: "> UPP EAST COAST TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'ANG MO KIO AVE 10',
                    'SERANGOON AVE 2',
                    'LOR AH SOO',
                    'EUNOS LINK',
                    'BEDOK NORTH RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "45",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "45",
                destination: "> ANG MO KIO DEPOT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'BEDOK NORTH RD',
                    'EUNOS LINK',
                    'LOR AH SOO',
                    'SERANGOON AVE 2',
                    'ANG MO KIO AVE 10'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "45",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    46: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "46",
                destination: "> UPP EAST COAST TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "PASIR RIS DR 8",
                    "TAMPINES AVE 6",
                    "TAMPINES AVE 3",
                    "BEDOK RESERVOIR RD",
                    "BEDOK NORTH RD",
                    "BEDOK SOUTH AVE 3"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "46",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "46",
                destination: "> PASIR RIS INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "BEDOK SOUTH AVE 3",
                    "BEDOK NORTH RD",
                    "BEDOK RESERVOIR RD",
                    "TAMPINES AVE 3",
                    "TAMPINES AVE 6",
                    "PASIR RIS DR 8"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "46",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "46T": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "46",
                destination: "> UPP EAST COAST TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TAMPINES AVE 3",
                    "BEDOK RESERVOIR RD",
                    "BEDOK NORTH RD",
                    "BEDOK SOUTH AVE 3"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "46",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "46",
                destination: "> TAMPINES INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "BEDOK SOUTH AVE 3",
                    "BEDOK NORTH RD",
                    "BEDOK RESERVOIR RD",
                    "TAMPINES AVE 3"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "46",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    47: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "47",
                destination: "CHANGI BIZ PARK TER-AMBER RD",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "BEDOK SOUTH RD",
                    "MARINE PARADE RD",
                    "AMBER RD"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "47",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    48: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "48",
                destination: "> BUONA VISTA TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'BEDOK SOUTH AVE 3',
                    'UPP EAST COAST RD',
                    'MARINE PARADE RD',
                    'BUKIT TIAMH RD',
                    'FARRER RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "48",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "48",
                destination: "> BEDOK NTH DEPOT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'FARRER RD',
                    'DUNEARN RD',
                    'MARINE PARADE RD',
                    'UPP EAST COAST RD',
                    'BEDOK SOTUH AVE 3'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "48",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    49: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "49",
                destination: "JURONG E. - JUR W. ST 42",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'JALAN AHMAD IBRAHIM',
                    'CORPORATION DR',
                    'BOON LAY WAY',
                    'JURONG WEST ST 51',
                    'JURONG WEST ST 42',
                    'JURONG WEST ST 41',
                    'BOON LAY WAY',
                    'CORPORATION DR',
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "49",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "49T": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "49",
                destination: "TAMAN JUR TER-JUR W ST 41",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'CORPORATION DR',
                    'BOON LAY WAY',
                    'JURONG WEST ST 51',
                    'JURONG WEST ST 42',
                    'JURONG WEST ST 41',
                    'BOON LAY WAY'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "49",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    50: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "50",
                destination: "> PUNGGOL INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "ANG MO KIO AVE 8",
                    "ANG MO KIO AVE 5",
                    "YIO CHU KANG RD",
                    "SENGKANG WEST AVE",
                    "SENGKANG EAST WAY",
                    "PUNGGOL DR"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "50",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "50",
                destination: "> BISHAN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "PUNGGOL DR",
                    "SENGKANG EAST WAY",
                    "SENGKANG WEST AVE",
                    "YIO CHU KANG RD",
                    "ANG MO KIO AVE 5",
                    "ANG MO KIO AVE 8"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "50",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "50A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "50A",
                destination: "ANG MO KIO STN",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "TERMINATES BEFORE",
                    topFont: "LECIP-7:5",
                    bottom: "ANG MO KIO STN EXIT B",
                    bottomFont: "LECIP-7:5",
            
                    serviceNumber: "58A"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "50A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "50C": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "CHINGAY 50 LOGO",
                destinationFont: "LECIP-10",
                scrolls: [                
                    {
                    renderType: "destScroll",
                    top: "  ~",
                    topFont: "LECIP-20:12",
                                
                    serviceNumber: ""
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: 'twoline',
                top: "CHINGAY",
                topFont: "LECIP-6:3",

                bottom: "50",
                bottomFont: "LECIP-6:3"
            }
        }
    },
    51: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "51",
                destination: "> JURONG EAST INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'HOUGANG AVE 3',
                    'EUNOS LINK',
                    'GEYLANG RD',
                    'NORTH BRIDGE RD',
                    'ALEXANDRA RD',
                    'PASIR PANJANG RD',
                    'WEST COAST RD',
                    'JURONG TOWN HALL RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "51",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "51",
                destination: "> HOUGANG CTRL INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'JURONG TOWN HALL RD',
                    'WEST COAST RD',
                    'PASIR PANJANG RD',
                    'ALEXANDRA RD',
                    'VICTORIA ST',
                    'SIMS AVE',
                    'EUNOS LINK',
                    'HOUGANG AVE 3'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "51",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "51A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "51A",
                destination: "PANDAN GARDENS",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "51A",
                    landmark: "PANDAN GARDENS (BLK 407)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "51A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    52: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "52",
                destination: "> JURONG EAST INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'SIN MING AVE',
                    'UPPER THOMSON RD',
                    'LORNIE RD',
                    'CLEMENTI RD',
                    "C'WEALTH AVE WEST",
                    'TOH GUAN RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "52",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "52",
                destination: "> BISHAN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'TOH GUAN RD',
                    "C'WEALTH AVE WEST",
                    'CLEMENTI RD',
                    'LORNIE RD',
                    'UPPER THOMSON RD',
                    'SIN MING AVE'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "52",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    53: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "53",
                destination: "> CHANGI AIRPORT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "BISHAN RD",
                    "SERANGOON CENTRAL",
                    "LOR AH SOO",
                    "HOUGANG AVE 1",
                    "PASIR RIS DR 1"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "53",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "53",
                destination: "> BISHAN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "PASIR RIS DR 1",
                    "HOUGANG AVE 1",
                    "LOR AH SOO",
                    "SERANGOON CENTRAL",
                    "BISHAN RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "53",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "53A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "53A",
                destination: "CHANGI AIRPORT",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "53A",
                    landmark: "CHANGI AIRPORT (PTB2)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "53A",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "53A",
                destination: "SERANGOON CENTRAL",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "53A",
                    landmark: "SERANGOON CENTRAL (BLK 261)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "53A",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
    },
    "53B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "53B",
                destination: "HOUGANG AVE 1",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "53B",
                    landmark: "HOUGANG AVE 1 (BLK 232)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "53B",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "53M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "53M",
                destination: "KOVAN HUB - S'GOON CTRL",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "HOUGANG AVE 1",
                    "LOR AH SOO",
                    "SERANGOON CENTRAL",
                    "LOR AH SOO",
                    "HOUGANG AVE 1"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "53M",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "53Z": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "53M",
                destination: "HOUGANG AVE 1-S'GOON CTRL",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "HOUGANG AVE 1",
                    "LOR AH SOO",
                    "SERANGOON CENTRAL",
                    "LOR AH SOO",
                    "HOUGANG AVE 1"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "53M",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    54: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "54",
                destination: "> KAMPONG BAHRU TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'MARYMOUNT RD',
                    'THOMSON RD',
                    'NEWTON RD',
                    'SCOTTS RD',
                    'RIVER VALLEY RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "54",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "54",
                destination: "> BISHAN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'RIVER VALLEY RD',
                    'SCOTTS RD',
                    'NEWTON RD',
                    'THOMSON RD',
                    'MARYMOUNT RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "54",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "54A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "54A",
                destination: "BISHAN STN",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "54A",
                    landmark: "BISHAN RD (BISHAN STN)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "54A",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "54A",
                destination: "> BISHAN RD",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "BISHAN ST 22"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "54A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    55: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "55",
                destination: "> UPP EAST COAST TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'ANG MO KIO AVE 10',
                    'HOUGANG AVE 2',
                    'HOUGANG AVE 3',
                    'JALAN EUNOS',
                    'STILL ROAD SOUTH',
                    'MARINE PARADE RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "55",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "55",
                destination: "> BISHAN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'MARINE PARADE RD',
                    'STILL ROAD SOUTH',
                    'JALAN EUNOS',
                    'HOUGANG AVE 3',
                    'HOUGANG AVE 2',
                    'ANG MO KIO AVE 10'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "55",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "55A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "55A",
                destination: "MARINE PARADE RD",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "55A",
                    terminateAt: "MARINE PARADE",
                    landmark: "RD (VICTORIA SCH)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "55A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "55B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "55B",
                destination: "ANG MO KIO AVE 10",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "55B",
                    landmark: "ANG MO KIO AVE 10 (BLK 443)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "55B",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "55S": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "55",
                destination: "> SIGLAP RD",
                destinationFont: "LECIP-10",
                scrolls: [
                    'ANG MO KIO AVE 10',
                    'HOUGANG AVE 2',
                    'HOUGANG AVE 3',
                    'JALAN EUNOS',
                    'STILL ROAD SOUTH',
                    'MARINE PARADE RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "55",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "55",
                destination: "> BISHAN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'MARINE PARADE RD',
                    'STILL ROAD SOUTH',
                    'JALAN EUNOS',
                    'HOUGANG AVE 3',
                    'HOUGANG AVE 2',
                    'ANG MO KIO AVE 10'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "55",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    56: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "56",
                destination: "> MARINA CTR TER",
                destinationFont: "LECIP-10",
                scrolls: [
                    "BISHAN ST 13",
                    "LOR 6 TOA PAYOH",
                    "THOMSON RD",
                    "BUKIT TIMAH RD",
                    "MIDDLE RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "56",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "56",
                destination: "> BISHAN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'MIDDLE RD',
                    'BUKIT TIMAH RD',
                    'THOMSON RD',
                    'LOR 6 TOA PAYOH',
                    'BISHAN ST 13'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "56",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
    },
    57: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "57",
                destination: "> BUKIT MERAH INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'LOR 6 TOA PAYOH',
                    'THOMSON RD',
                    'SHENTON WAY',
                    'TELOK BLANGAH RD',
                    'DEPOT RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "57",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "57",
                destination: "> BISHAN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'DEPOT RD',
                    'TELOK BLANGAH RD',
                    'CECIL ST',
                    'THOMSON RD',
                    'LOR 6 TOA PAYOH'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "57",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    58: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "58",
                destination: "> PASIR RIS INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'SERANGOON AVE 3',
                    'SERANGOON AVE 2',
                    'UPP PAYA LEBAR RD',
                    'UBI AVE 3',
                    'KAKI BUKIT AVE 1',
                    'TAMPINES AVE 10',
                    'PASIR RIS DR 12, 3',
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "58",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "58",
                destination: "> BISHAN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'PASIR RIS DR 3, 12',
                    'TAMPINES AVE 10',
                    'KAKI BUKIT AVE 1',
                    'UBI AVE 3',
                    'UPP PAYA LEBAR RD',
                    'SERANGOON AVE 2',
                    'SERANGOON AVE 3'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "58",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "58A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "58A",
                destination: "TAMPINES AVE 10",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "58A",
                    landmark: "TAMPINES AVE 10 (BEF TPE)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "58A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "58B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "58B",
                destination: "TAI SENG STN",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "58B",
                    terminateAt: "UPP PAYA LEBAR",
                    landmark: "AFT TAI SENG STN"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "58B",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    59: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "59",
                destination: "> CHANGI VILLAGE TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "LOR 1 TOA PAYOH",
                    "KAKI BUKIT AVE 1",
                    "BEDOK RESERVOIR RD",
                    "TAMPINES AVE 2",
                    "LOYANG AVE"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "59",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "59",
                destination: "> BISHAN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "LOYANG AVE",
                    "TAMPINES AVE 2",
                    "BEDOK RESERVOIR RD",
                    "KAKI BUKIT AVE 1",
                    "LOR 1 TOA PAYOH"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "59",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    60: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "60",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'JALAN EUNOS',
                    'BEDOK RESERVOIR RD',
                    'BEDOK NTH RD',
                    'BEDOK RESERVOIR RD',
                    'JALAN EUNOS'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "60",
                font: "LECIP-20:12",
                spacing: 2
            }
        } // D2?
    },
    "60A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "60A",
                destination: "BEDOK RESERVOIR RD",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "60A",
                    landmark: "BEDOK RESERVOIR RD (BLK 608)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "60A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "60T": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "60T",
                destination: "BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "60T",
                    landmark: "BEDOK INT"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "60T",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    62: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "62",
                destination: "PUNGGOL-SIMS AVE",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'SENGKANG EAST DR',
                    'HOUGANG AVE 10',
                    'HOUGANG AVE 1',
                    'UPPER PAYA LEBAR RD',
                    'ALJUNIED RD',
                    'GEYLANG RD',
                    'ALJUNIED RD',
                    'UPPER PAYA LEBAR RD',
                    'HOUGANG AVE 1',
                    'HOUGANG AVE 10',
                    'SENGKANG EAST DR'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "62",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "62A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "62A",
                destination: "ALJUNIED STN",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "62A",
                    landmark: "ALJUNIED RD (ALJUNIED STN)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "62A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    63: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "63",
                destination: "> JALAN RUMAH TINGGI",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'UBI AVE 1',
                    'GEYLANG RD',
                    'NORTH BRIDGE RD',
                    'UPPER CROSS ST',
                    'TIONG BAHRU RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "63",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "63",
                destination: "> EUNOS INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'TIONG BAHRU RD',
                    'EU TONG SEN ST',
                    'VICTORIA ST',
                    'SIMS AVE',
                    'UBI AVE 1'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "63",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "63A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "63A",
                destination: "JLN RUMAH TINGGI",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "63A",
                    landmark: "JLN RUMAH TINGGI (OPP BLK 36)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "63A",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "63A",
                destination: "ALJUNIED STN",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "63A",
                    landmark: "ALJUNIED RD (ALJUNIED STN)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "63A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "63M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "63M",
                destination: "EUNOS INT - CIRCUIT RD",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'UBI AVE 1',
                    'UBI AVE 2',
                    'JALAN EUNOS',
                    'CIRCUIT RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "63M",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
    },
    64: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "64",
                destination: " > MEI LING ST",
                destinationFont: "LECIP-10",
                scrolls: [
                    "ALJUNIED RD",
                    "BENDEMEER RD",
                    "JALAN BESAR",
                    "CLEMENCEAU AVE",
                    "TIONG BAHRU RD",
                    "STIRLING RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "64",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "64",
                destination: " > SIMS PLACE TER",
                destinationFont: "LECIP-10",
                scrolls: [
                    "ALEXANDRA RD",
                    "TIONG BAHRU RD",
                    "CLEMENCEAU AVE",
                    "SELEGIE RD",
                    "SERANGOON RD",
                    "ALJUNIED RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "64",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    65: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "65",
                destination: "> HARBOURFRONT INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "BEDOK RESERVOIR RD",
                    "UBI AVE 2",
                    "MACPHERSON RD",
                    "BENDEMEER RD",
                    "JALAN BESAR",
                    "ORCHARD BOULEVARD",
                    "LOWER DELTA RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "65",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "65",
                destination: "> TAMPINES INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "LOWER DELTA RD",
                    "ORCHARD RD",
                    "SELEGIE RD",
                    "SERANGOON RD",
                    "MACPHERSON RD",
                    "UBI AVE 2",
                    "BEDOK RESERVOIR RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "65",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
    },
    66: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "66",
                destination: "> BEDOK ",
                destinationFont: "LECIP-10",
                scrolls: [
                    "JURONG TOWN HALL RD",
                    "BUKIT BATOK CENTRAL",
                    "BUKIT TIMAH RD",
                    "SERANGOON RD",
                    "MACPHERSON RD",
                    "UBI AVE 2",
                    "BEDOK RESERVOIR RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "66",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "66",
                destination: "> JURONG EAST",
                destinationFont: "LECIP-10",
                scrolls: [
                    "BEDOK RESERVOIR RD",
                    "MACPHERSON RD",
                    "UBI AVE 2",
                    "BENDEMEER RD",
                    "DUNEARN RD",
                    "BUKIT BATOK CENTRAL",
                    "JURONG TOWN HALL RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "66",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
    },
    "66A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "66A",
                destination: "LITTLE INDIA STN",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "66A",
                    landmark: "BT TIMAH RD (LITTLE INDIA STN)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "66A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "66B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "66B",
                destination: "SERANGOON RD",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                serviceNumber: "66B",
                landmark: "SERANGOON RD (TEKKA CTR)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "66B",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    68: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "68",
                destination: "TAMPINES - TAMPINES ST 92",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    'TAMPINES AVE 4',
                    'TAMPINES ST 92'
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "68",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "68",
                destination: "> TAMPINES",
                destinationFont: "LECIP-10",
                scrolls: [
                    'TAMPINES AVE 4',
                    'TAMPINES ST 92'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "68",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    69: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "69",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'TAMPINES AVE 5',
                    'TAMPINES AVE 8',
                    'TAMPINES AVE 1',
                    'BEDOK RESERVOIR RD',
                    'BEDOK NTH AVE 3',
                    'BEDOK NTH ST 1'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "69",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "69",
                destination: "> TAMPINES INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'BEDOK NTH AVE 3',
                    'BEDOK RESERVOIR RD',
                    'TAMPINES AVE 1',
                    'TAMPINES AVE 8',
                    'TAMPINES AVE 5'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "69",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    70: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "70",
                destination: "> SHENTON WAY TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "YIO CHU KANG RD",
                    "SERANGOON CENTRAL",
                    "UPPER PAYA LEBAR RD",
                    "PAYA LEBAR RD",
                    "GUILLEMARD RD",
                    "NICOLL HIGHWAY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "70",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "70",
                destination: "> YIO CHU KANG TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "NICOLL HIGHWAY",
                    'GUILLEMARD RD',
                    "PAYA LEBAR RD",
                    "UPPER PAYA LEBAR RD",
                    "SERANGOON CENTRAL",
                    "YIO CHU KANG RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "70",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "70A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "70A",
                destination: "TEMASEK AVE",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "70A",
                    landmark: "TEMASEK AVE (OP. RITZ-CARLTON)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "70A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "70B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "70B",
                destination: "SERANGOON STN",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "70B",
                    terminateAt: "S'GOON CTRL",
                    landmark: "(S'GOON STN EXIT C / BLK 201)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "70B",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "70M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "70M",
                destination: "YCK INT-MARINA CTR",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'ANG MO KIO ST 63',
                    'ANG MO KIO ST 64',
                    'YIO CHU KANG RD',
                    'UPP PAYA LEBAR RD',
                    'TEMASAK AVE'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "70M",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    71: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "71",
                destination: "YCK INT-BISHAN ST 11",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "ANG MO KIO AVE 4",
                    "ANG MO KIO AVE 1",
                    "BISHAN RD",
                    "BRADDELL RD",
                    "BISHAN RD",
                    "ANG MO KIO AVE 1",
                    "ANG MO KIO AVE 4"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "71",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "71A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "71A",
                destination: "BISHAN STN",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "OPP BISHAN STN",
                    topFont: "LECIP-20:6",
            
                    serviceNumber: "71A"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "71A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    72: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "72",
                destination: "> TAMPINES INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "ANG MO KIO AVE 5",
                    "HOUGANG AVE 9",
                    "HOUGANG CENTRAL",
                    "TAMPINES RD",
                    "TAMPINES AVE 10",
                    "TAMPINES AVE 9"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "72",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "72",
                destination: "> YIO CHU KANG INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TAMPINES AVE 9",
                    "TAMPINES AVE 10",
                    "TAMPINES RD",
                    "HOUGANG CENTRAL",
                    "HOUGANG AVE 9",
                    "ANG MO KIO AVE 5"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "72",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },

    "72A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "72A",
                destination: "HOUGANG CENTRAL",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "72A",
                    landmark: "HOUGANG CTRL (OPP HG CTRL INT)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "72A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "72B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "72B",
                destination: "ANG MO KIO AVE 5",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                renderType: "swt",
                serviceNumber: "72B",
                landmark: "AMK AVE 5 (ITE COLLEGE CTRL)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "72B",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    73: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "73",
                destination: "> TOA PAYOH INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'SERANGOON NORTH AVE 4',
                    'SERANGOON GARDEN WAY',
                    'LOR CHUAN',
                    'BRADDELL RD',
                    'LOR 4 TOA PAYOH'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "73",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "73",
                destination: "> ANG MO KIO INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'LOR 4 TOA PAYOH',
                    'BRADDELL RD',
                    'LOR CHUAN',
                    'SERANGOON GARDEN WAY',
                    'SERANGOON NORTH AVE 4'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "73",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "73A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "73A",
                destination: "TOA PAYOH INT",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "73A",
                    landmark: "TOA PAYOH INT"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "73A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "73T": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "73T",
                destination: "TOA PAYOH INT",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "73T",
                    landmark: "TOA PAYOH INT"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "73T",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    74: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "74",
                destination: "> BUONA VISTA TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'HOUGANG AVE 8',
                    'ANG MO KIO AVE 3',
                    'MARYMOUNT RD',
                    'LORNIE RD',
                    'DUNEARN RD',
                    'CLEMENTI RD',
                    'DOVER AVE'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "74",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "74",
                destination: "> HOUGANG CTRL INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'DOVER AVE',
                    'CLEMENTI RD',
                    'BUKIT TIMAH RD',
                    'LORNIE RD',
                    'MARYMOUNT RD',
                    'ANG MO KIO AVE 3',
                    'HOUGANG AVE 8'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "74",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "74E": {
        1: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "74e",
                image: "express",
                destination: "EXPRESS 74e"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "74e",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "74e",
                image: "fastForward",
                destination: "FFW 74e"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "74e",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "75S": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "75S",
                destination: "SEMBAWANG RD",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'BUS TALK WITH MR ONG'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "75S",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    76: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "76",
                destination: "> EUNOS INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'ANG MO KIO AVE 4',
                    'ANG MO KIO AVE 3',
                    'YIO CHU KANG RD',
                    'UPP PAYA LEBAR RD',
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "76",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "76",
                destination: "> YIO CHU KANG INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'UPP PAYA LEBAR RD',
                    'YIO CHU KANG RD',
                    'ANG MO KIO AVE 3',
                    'ANG MO KIO AVE 4'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "76",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "76M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "76",
                destination: "> MARINE TERRACE",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'ANG MO KIO AVE 4',
                    'ANG MO KIO AVE 3',
                    'YIO CHU KANG RD',
                    'UPP PAYA LEBAR RD',
                    'TANJONG KATONG RD',
                    'MARINE PARADE RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "76",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "76",
                destination: "> YIO CHU KANG INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'MARINE PARADE RD',
                    'TANJONG KATONG RD',
                    'UPP PAYA LEBAR RD',
                    'YIO CHU KANG RD',
                    'ANG MO KIO AVE 3',
                    'ANG MO KIO AVE 4'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "76",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "76A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "76A",
                destination: "MARINE TERRACE",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "76A",
                    terminateAt: "MARINE TERR",
                    landmark: "(OP. CHIJ KATONG CONVENT)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "76A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    78: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "78",
                destination: "JURONG EAST - CLEMENTI",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'JURONG TOWN HALL RD',
                    'WEST COAST RD',
                    'PENJURU RD',
                    'PANDAN RD',    
                    'WEST COAST RD',
                    'COMMONWEALTH AVE WEST',
                    'WEST COAST RD',
                    'PANDAN RD',  
                    'PENJURU PENJURU',
                    'WEST COAST RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "78",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "78A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "78A",
                destination: "TANJONG PENJURU",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "78A",
                    landmark: "TANJONG PENJURU (OPP CLF INTL)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "78A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    79: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "79",
                destination: "> BOON LAY",
                destinationFont: "LECIP-10",
                scrolls: [
                    'JURONG TOWN HALL RD',
                    'TEBAN GARDENS RD',
                    'JALAN BUROH',
                    'JURONG PORT RD',
                    'CORPORATION RD',
                    'CHIN BEE AVE',
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "79",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "79",
                destination: "> JURONG EAST",
                destinationFont: "LECIP-10",
                scrolls: [
                    'CHIN BEE AVE',
                    'CORPORATION RD',
                    'JURONG PORT RD',
                    'JALAN BUROH',
                    'TEBAN GARDENS RD',
                    'JURONG TOWN HALL RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "79",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "79A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "79A",
                destination: "BOON LAY INT",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "79A",
                    landmark: "BOON LAY INT"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "79A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    80: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "80",
                destination: "> HARBOURFRONT INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'UPP SERANGOON RD',
                    'UPP PAYA LEBAR RD',
                    'GEYLANG RD',
                    'NORTH BRIDGE RD',
                    'KEPPEL RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "80",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "80",
                destination: "> SENGKANG INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'KEPPEL RD',
                    'VICTORIA ST',
                    'SIMS AVE',
                    'UPP PAYA LEBAR RD',
                    'UPP SERANGOON RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "80",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "80A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "80A",
                destination: "ALJUNIED STN",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "80A",
                    landmark: "ALJUNIED RD (ALJUNIED STATION)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "80A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    81: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "81",
                destination: "TAMPINES INT-S'GOON CTRL",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TAMPINES AVE 7",
                    "PASIR RIS DR 1",
                    "TAMPINES RD",
                    "UPP SERANGOON RD",
                    "TAMPINES RD",
                    "PASIR RIS DR 1",
                    "TAMPINES AVE 7",
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "81",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    82: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "82",
                destination: "PUNGGOL - S'GOON CENTRAL",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    'PUNGGOL RD',
                    'HOUGANG AVE 10',
                    'UPPER SERANGOON RD',
                    'SERANGOON CENTRAL',
                    'UPPER SERANGOON RD',
                    'HOUGANG AVE 10'
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "82",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    83: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "83",
                destination: "PUNGGOL - SENGKANG SQ",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    {
                        renderType: "centreMessageServiceScroll",
                        serviceNumber: "83",
                        top: "PUNGGOL - SENGKANG",
                        topFont: "LECIP-7:5",

                        bottom: "(LOOP)",
                        bottomFont: "LECIP-7:5"
                    },
                    'PUNGGOL CENTRAL',
                    'PUNGGOL FIELD',
                    'PUNGGOL RD',
                    'COMPASSVALE ST',
                    'PUNGGOL RD',
                    'PUNGGOL FIELD'
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "83",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    84: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "84",
                destination: "PUNGGOL - PUNGGOL RD",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "PUNGGOL CENTRAL",
                    "PUNGGOL RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "84",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    85: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "85",
                destination: "> YISHUN",
                destinationFont: "LECIP-10",
                scrolls: [
                    "PUNGGOL CENTRAL",
                    "SENGKANG EAST WAY",
                    "SENGKANG WEST WAY",
                    "YISHUN AVE 2"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "85",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "85",
                destination: "> PUNGGOL",
                destinationFont: "LECIP-10",
                scrolls: [
                    "YISHUN AVE 2",
                    "SENGKANG WEST WAY",
                    "SENGKANG EAST WAY",
                    "RIVERVALE DR",
                    "PUNGGOL CENTRAL"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "85",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    86: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "86",
                destination: "> ANG MO KIO INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'COMPASSVALE RD',
                    'RIVERVALE DR',
                    'JALAN KAYU',
                    'YIO CHU KANG RD',
                    'ANG MO KIO AVE 6'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "86",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "86",
                destination: "> SENGKANG INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'ANG MO KIO AVE 6',
                    'YIO CHU KANG RD',
                    'JALAN KAYU',
                    'RIVERVALE DR',
                    'COMPASSVALE RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "86",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "86A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "86A",
                destination: "YIO CHU KANG STN",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "86A",
                    terminateAt: "AMK AVE 6",
                    landmark: "(YIO CHU KANG STN)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "86A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "86B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "86B",
                destination: "JLN KAYU",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "86B",
                    landmark: "JALAN KAYU (BEF SELETAR CAMP)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "86B",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    87: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "87",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'COMPASSVALE RD',
                    'HOUGANG AVE 10, 5, 7, 3',
                    'EUNOS LINK',
                    'KAKI BUKIT AVE 1',
                    'BEDOK NTH RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "87",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "87",
                destination: "> SENGKANG INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'BEDOK NTH RD',
                    'KAKI BUKIT AVE 1',
                    'EUNOS LINK',
                    'HOUGANG AVE 3, 5, 7, 10',
                    'COMPASSVALE RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "87",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "87H": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "87",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [{
                        renderType: "message",
                        text: "HAPPY CNY",
                        font: "LECIP-20:12",
                        spacing: 2
                    },
                    'COMPASSVALE RD',
                    'HOUGANG AVE 10, 5, 7, 3',
                    'EUNOS LINK',
                    'KAKI BUKIT AVE 1',
                    'BEDOK NTH RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "87",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "87",
                destination: "> SENGKANG INT",
                destinationFont: "LECIP-10",
                scrolls: [{
                        renderType: "message",
                        text: "HAPPY CNY",
                        font: "LECIP-20:12",
                        spacing: 2
                    },
                    'BEDOK NTH RD',
                    'KAKI BUKIT AVE 1',
                    'EUNOS LINK',
                    'HOUGANG AVE 3, 5, 7, 10',
                    'COMPASSVALE RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "87",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    88: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "88",
                destination: "> TOA PAYOH INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'PASIR RIS DR 3',
                    'PUNGGOL RD',
                    'HOUGANG AVE 8',
                    'ANG MO KIO AVE 5',
                    'BISHAN ST 22'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "88",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "88",
                destination: "> PASIR RIS INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'BISHAN ST 22',
                    'ANG MO KIO AVE 5',
                    'HOUGANG AVE 8',
                    'PUNGGOL RD',
                    'PASIR RIS DR 3'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "88",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "88A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "88A",
                destination: "ANG MO KIO STN",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "88A",
                    landmark: "AMK AVE 3 (OPP AMK STATION)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "88A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "88B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "88B",
                destination: "ANG MO KIO AVE 5",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "88B",
                    landmark: "AMK AVE 5 (BEF YIO CHU KANG RD)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "88B",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "88C": {
        1: {
            front: {
                renderType: "ChingaystandardService",
                serviceNumber: "88",
                destination: "> PASIR RIS INT",
                destinationFont: "Hanover-10",
                scrolls: [                
                    {
                    renderType: "destScroll",
                    top: "  ~",
                    topFont: "LECIP-20:12",
                                
                    serviceNumber: "88"
                },
                    'PASIR RIS DR 3',
                    'PUNGGOL RD',
                    'HOUGANG AVE 8',
                    'ANG MO KIO AVE 5',
                    'BISHAN ST 22'
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "88",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "ChingaystandardService",
                serviceNumber: "88",
                destination: "> TOA PAYOH INT",
                destinationFont: "Hanover-10",
                scrolls: [ 
                    {
                    renderType: "destScroll",
                    top: "  ~",
                    topFont: "LECIP-20:12",
                                
                    serviceNumber: "88"
                },
                    'BISHAN ST 22',
                    'ANG MO KIO AVE 5',
                    'HOUGANG AVE 8',
                    'PUNGGOL RD',
                    'PASIR RIS DR 3'
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "88",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    89: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "89",
                destination: "> CHANGI AIRFREIGHT CTR",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "HOUGANG AVE 10",
                    "COMPASSVALE RD",
                    "PASIR RIS DR 1",
                    "PASIR RIS DR 3",
                    "LOYANG AVE",
                    "AIRLINE RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "89",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "89",
                destination: "> HOUGANG CTRL INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'AIRLINE RD',
                    'LOYANG AVE',
                    'PASIR RIS DR 3',
                    'PASIR RIS DR 1',
                    'COMPASSVALE RD',
                    'HOUGANG AVE 10'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "89",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "89A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "89A",
                destination: "AIRPORT CARGO RD",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "89A",
                    terminateAt: "AIRPORT CARGO RD",
                    landmark: "AIRFREIGHT TERMINAL BLDG"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "89A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "89E": {
        1: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "89e",
                image: "express",
                destination: "EXPRESS 89e"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "89e",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "89e",
                image: "fastForward",
                destination: "FFW 89e"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "89e",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    90: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "90",
                destination: "EUNOS INT-AIRPORT RD",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "LOR 6 TOA PAYOH",
                    "JALAN TOA PAYOH",
                    "MACPHERSON RD",
                    "AIRPORT RD"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "90",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "90A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "90A",
                destination: "AIRPORT RD",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "90A",
                    terminateAt: "AIRPORT RD",
                    landmark: "PAYA LEBAR AIR BASE"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "90A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    91: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "91",
                destination: "BUONA VISTA TER-AYER RAJAH C.",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    'COMMONWEALTH AVE',
                    'NORTH BUONA VISTA RD',
                    'AYER RAJAH AVE',
                    'AYER RAJAH CRES',
                    'AYER RAJAH AVE',
                    'NORTH BUONA VISTA RD'
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "91",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "91A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "91A",
                destination: "AYER RAJAH BUS PARK",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "91A",
                    terminateAt: "AYER RAJAH CRES",
                    landmark: "(AYER RAJAH BUS PARK)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "91A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    92: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "92",
                destination: "GHIM MOH TER-SCIENCE PK DR",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    'NORTH BUONA VISTA RD',
                    'BUONA VISTA FLYOVER',
                    'SCIENCE PK DR',
                    'BUONA VISTA FLYOVER',
                    'NORTH BUONA VISTA RD',
                    'MOUNT SINAI RD',
                    'MOUNT SINAI DR',
                    'MOUNT SINAI RISE'
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "92",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "92A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "92A",
                destination: "SCIENCE PARK DRIVE",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "92A",
                    terminateAt: "SCIENCE PARK DR",
                    landmark: "(OPP NORMANTON PK/R'FORD)" // check
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "92A",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "92A",
                destination: "GHIM MOH RD",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "92A",
                    landmark: "GHIM MOH RD (BLK 13)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "92A",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
    },
    "92B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "92B",
                destination: "KENT RIDGE STN",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "92B",
                    terminateAt: "S. BUONA VISTA RD",
                    landmark: "(KENT RIDGE STN)" // check
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "92B",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "92B",
                destination: "SCIENCE PARK DRIVE",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "92B",
                    terminateAt: "SCIENCE PARK DR",
                    landmark: "(OPP THE RUTHERFORD)" // check
                }
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "92B",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
    },
    "92M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "92M",
                destination: "GHIM MOH TER - N.BUONA VISTA",
                destinationFont: "LECIP-6:3",
                scrolls: [
                    'NORTH BUONA VISTA RD',
                    'MOUNT SINAI RD',
                    'MOUNT SINAI DR',
                    'MOUNT SINAI RISE'
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "92M",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "92T": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "92T",
                destination: "GHIM MOH TER",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "92T",
                    landmark: "GHIM MOH TER"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "92T",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    93: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "93",
                destination: "> EUNOS INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'ALEXANDRA RD',
                    'FARRER RD',
                    'BRADDELL RD',
                    'BARTLEY RD',
                    'JALAN EUNOS'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "93",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "93",
                destination: "> HARBOURFRONT INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'JALAN EUNOS',
                    'BARTLEY RD',
                    'BRADDELL RD',
                    'FARRER RD',
                    'ALEXANDRA RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "93",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    94: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "94",
                destination: "EUNOS INT-AIRPORT RD",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'JALAN EUNOS',
                    'EUNOS LINK',
                    'AIRPORT RD',
                    'PAYA LEBAR AIRPORT',
                    'AIRPORT RD',
                    'EUNOS LINK',
                    'JALAN EUNOS'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "94",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "94A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "94A",
                destination: "AIRPORT RD",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "94A",
                    landmark: "AIRPORT RD(BEF RSAF R'ABOUT)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "94A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    95: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "95",
                destination: "KENT RIDGE TER-HOLLAND RD",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    'KENT RIDGE CRESCENT',
                    'LOWER KENT RIDGE RD',
                    "NORTH BUONA VISTA RD",
                    "HOLLAND AVE",
                    'NORTH BUONA VISTA RD',
                    'LOWER KENT RIDGE RD',
                    'KENT RIDGE CRESENT'
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "95",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "95A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "95A",
                destination: "LOWER KENT RIDGE RD",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "95A",
                    landmark: "LOWER KENT RIDGE RD (NUH)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "95A",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "95A",
                destination: "> NUH",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "NORTH BUOUNA VISTA RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "95A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "95B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "95B",
                destination: "BUONA VISTA STN",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                serviceNumber: "95B",
                landmark: "N.BUONA VISTA RD (BUONA V. STN)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "95B",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "95C": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "95C",
                destination: "KENT RIDGE CRES",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "95C",
                    terminateAt: "KENT RIDGE",
                    landmark: "CRES (KENT RIDGE HALL)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "95C",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "95C",
                destination: "> KENT RIDGE CRES",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "NORTH BUOUNA VISTA RD",
                    "LOWER KENT RIDGE RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "95C",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "95D": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "95D",
                destination: "HOLLAND RD",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "95D",
                    landmark: "HOLLAND RD (HOLLAND VILLAGE)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "95D",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "95D",
                destination: "> HOLLAND RD",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "KENT RIDGE CRESCENT",
                    "LOWER KENT RIDGE RD",
                    "NORTH BUOUNA VISTA RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "95D",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    96: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "96",
                destination: "> CLEMENTI",
                destinationFont: "LECIP-10",
                scrolls: [
                    "COMMMONWEALTH AVE WEST",
                    "CLEMENTI RD",
                    "KENT RIDGE CRES"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "96",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "96A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "96A",
                destination: "KENT RIDGE CRES",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "96A",
                    terminateAt: "KENT RIDGE",
                    landmark: "CRES (NUS RAFFLES HALL)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "96A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "96B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "96B",
                destination: "CLEMENTI STN",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "96B",
                    landmark: "C'WEALTH AVE W. (CLEMENTI STN)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "96B",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    97: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "97",
                destination: "> MARINA CTR",
                destinationFont: "LECIP-10",
                scrolls: [
                    "JURONG TOWN HALL RD",
                    "AYE",
                    "ALEXANDRA RD",
                    "TELOK BLANGAH RD",
                    "ROBINSON RD",
                    "BAYFRONT AVE"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "97",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "97",
                destination: "> JURONG EAST",
                destinationFont: "LECIP-10",
                scrolls: [
                    "BAYFRONT AVE",
                    "SHENTON WAY",
                    "TELOK BLANGAH RD",
                    "ALEXANDRA RD",
                    "AYE",
                    "JURONG TOWN HALL RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "97",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    "97A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "97A",
                destination: "RAFFLES AVE",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "97A",
                    landmark: "RAFFLES AVE (THE ESPLANADE)",
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "97A",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "97A",
                destination: "> RAFFLES AVE",
                destinationFont: "LECIP-10",
                scrolls: [
                    "JURONG TOWN HALL RD",
                    "AYE",
                    "ALEXANDRA RD",
                    "TELOK BLANGAH RD",
                    "ROBINSON RD",
                    "BAYFRONT AVE"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "97A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "97B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "97B",
                destination: "HARBOURFRONT STN",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "97B",
                    terminateAt: "TELOK BLANGAH",
                    landmark: "RD (HARBOURFRONT STN)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "97B",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "97B",
                destination: "> HARBOURFRONT STN",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "JURONG TOWN HALL RD",
                    "AYE",
                    "ALEXANDRA RD",
                    "TELOK BLANGAH RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "97B",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "97E": {
        1: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "97e",
                image: "express",
                destination: "EXPRESS 97e"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "97e",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "97e",
                image: "fastForward",
                destination: "FFW 97e"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "97e",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    98: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "98",
                destination: "> JURONG PIER WAY",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "JURONG EAST AVE 1",
                    "JURONG WEST AVE 1",
                    "BOON LAY WAY",
                    "CORPORATION DR",
                    "JURONG PORT RD",
                    "JALAN BUROH"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "98",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "98",
                destination: "> JURONG EAST",
                destinationFont: "LECIP-10",
                scrolls: [
                    "JALAN BUROH",
                    "JURONG PORT RD",
                    "CORPORATION RD",
                    "BOON LAY WAY",
                    "JURONG WEST AVE 1",
                    "JURONG EAST AVE 1"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "98",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
   "98A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "98A",
                destination: "CORPORATION RD",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "98A",
                    landmark: "CORPORATION RD (CORPORATION PL)",
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "98A",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "98A",
                destination: "> CORPORATION RD",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TERMINATING AT",
                    "JURONG WEST AVE 1 TO",
                    "BOON LAY WAY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "98A",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
   "98B": {
         1: {
            front: {
                renderType: "standardService",
                serviceNumber: "98B",
                destination: "JURONG PIER WAY",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "98B",
                    terminateAt: "JURONG PIER WAY",
                    landmark: "(JURONG ISLAND CHECKPOINT)",
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "98B",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "98B",
                destination: "> JURONG PIER WAY",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TERMINATING AT",
                    "JURONG EAST INT TO",
                    "JURONG EAST AVE 1",
                    "JURONG WEST AVE 1",
                    "BOON LAY WAY",
                    "CORPORATION DR",
                    "JURONG PORT RD",
                    "JALAN BUROH"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "98B",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "98M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "98M",
                destination: "JURONG EAST INT-CORP RD",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    'JURONG EAST AVE 1',
                    'JURONG WEST AVE 1',
                    'BOON LAY WAY',
                    'CORPORATION DR',
                    'JALAN AHMAD IBRAHIM',
                    'CORPORATION DR',
                    'BOON LAY WAY',
                    'JURONG WEST AVE 1'
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "98M",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    99: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "99",
                destination: "> JOO KOON INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "JURONG EAST AVE 1",
                    "JURONG WEST AVE 1",
                    "JURONG WEST AVE 4",
                    "JURONG WEST ST 91",
                    "UPPER JURONG RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "99",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "99",
                destination: "> CLEMENTI INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "UPP JURONG RD",
                    "JURONG WEST ST 91",
                    "JURONG WEST AVE 4",
                    "JURONG WEST AVE 1",
                    "JURONG EAST AVE 1"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "99",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    100: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "100",
                destination: "> GHIM MOH TER",
                destinationFont: "LECIP-10",
                scrolls: [
                    'ALJUNIED RD',
                    'GEYLANG RD',
                    'BEACH RD',
                    'SHENTON WAY',
                    'TELOK BLANGAH RD',
                    'ALEXANDRA RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "100",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "100",
                destination: "> SERANGOON INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'ALEXANDRA RD',
                    'TELOK BLANGAH RD',
                    'ROBINSON RD',
                    'BEACH RD',
                    'SIMS AVE',
                    'ALJUNIED RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "100",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "100A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "100A",
                destination: "ALJUNIED STN",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "100A",
                    terminateAt: "ALJUNIED RD",
                    landmark: "(ALJUNIED STN)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "100A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    101: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "101",
                destination: "S'GOON INT-BUANGKOK LINK",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "UPPER SERANGOON RD",
                    "HOUGANG CENTRAL",
                    "HOUGANG AVE 8",
                    "HOUGANG ST 51",
                    "BUANGKOK LINK",
                    "HOUGANG ST 51",
                    "HOUGANG AVE 8",
                    "HOUGANG CENTRAL",
                    "UPPER SERANGOON RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "101",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    102: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "102",
                destination: "HOUGANG-SELETAR A'SPACE",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "UPPER SERANGOON RD",
                    "BUANGKOK DR",
                    "COMPASSVALE DR",
                    "SENGKANG EAST WAY",
                    "SENGKANG WEST WAY",
                    "SELETAR A'SPACE DR"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "102",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "102A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "100A",
                destination: "SENGKANG WEST WAY",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "102A",
                    terminateAt: "SENGKANG",
                    landmark: "WEST WAY (OPP BLK 461B)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "102A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "102B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "102B",
                destination: "SENGKANG STN",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "102B",
                    terminateAt: "SENGKANG W.",
                    landmark: "WAY (S'KANG STN/BLK260A)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "102B",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    103: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "103",
                destination: "> YISHUN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "YIO CHU KANG RD",
                    "JALAN KAYU",
                    "SELETAR AEROSPACE DR",
                    "WEST CAMP RD",
                    "YISHUN CENTRAL"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "103",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "103",
                destination: "> SERANGOON INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "YISHUN CENTRAL",
                    "WEST CAMP RD",
                    "SELETAR AEROSPACE DR",
                    "JALAN KAYU",
                    "YIO CHU KANG RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "103",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
    },
    "103M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "103M",
                destination: "> WEST CAMP RD",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "YIO CHU KANG RD",
                    "JALAN KAYU",
                    "SELETAR A'SPACE DR",
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "103M",
                font: "LECIP-20:6",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "103M",
                destination: "> SERANGOON",
                destinationFont: "LECIP-10",
                scrolls: [
                    "SELETAR A'SPACE DR",
                    "JALAN KAYU",
                    "YIO CHU KANG RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "103M",
                font: "LECIP-20:6",
                spacing: 2
            }
        },
    },
   "103W": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "103W",
                destination: "> WEST CAMP RD",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "YIO CHU KANG RD",
                    "JALAN KAYU",
                    "SELETAR A'SPACE DR",
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "103W",
                font: "LECIP-20:6",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "103W",
                destination: "> SERANGOON",
                destinationFont: "LECIP-10",
                scrolls: [
                    "SELETAR A'SPACE DR",
                    "JALAN KAYU",
                    "YIO CHU KANG RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "103W",
                font: "LECIP-20:6",
                spacing: 2
            }
        },
    },
    "103Z": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "103",
                destination: "> WEST CAMP RD",
                destinationFont: "LECIP-10",
                scrolls: [
                    "YIO CHU KANG RD",
                    "JALAN KAYU",
                    "SELETAR AEROSPACE DR",
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "103",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "103",
                destination: "> SERANGOON INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "SELETAR AEROSPACE DR",
                    "JALAN KAYU",
                    "YIO CHU KANG RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "103",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
    },
    105: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "105",
                destination: "> JURONG EAST INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'SERANGOON AVE 3',
                    'TOA PAYOH CENTRAL',
                    'STEVENS RD',
                    'ORCHARD BOUELEVARD',
                    'HOLLAND RD',
                    'COMMONWEALTH AVE',
                    "COMMONWEALTH AVE WEST",
                    'TOH GUAN RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "105",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "105",
                destination: "> SERANGOON INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'TOH GUAN RD',
                    "COMMONWEALTH AVE WEST",
                    'COMMONWEALTH AVE',
                    'HOLLAND RD',
                    'ORCHARD RD',
                    'STEVENS RD',
                    'TOA PAYOH CENTRAL',
                    'SERANGOON AVE 3'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "105",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "105B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "105B",
                destination: "CLEMENTI STN",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "105B",
                    terminateAt: "C'WEALTH AVE",
                    landmark: "WEST (CLEMENTI STN EXIT B)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "105B",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    107: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "107",
                destination: "> SHENTON WAY TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "HOUGANG AVE 10",
                    "UPPER SERANGOON RD",
                    "KALLANG BAHRU",
                    "LAVENDER ST",
                    "BEACH RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "107",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "107",
                destination: "> HOUGANG CTRL INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "BEACH RD",
                    "LAVENDER ST",
                    "KALLANG BAHRU",
                    "UPPER SERANGOON RD",
                    "HOUGANG AVE 10"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "107",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "107M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "107M",
                destination: "HOUGANG INT-MARINA CTR",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    'UPPER SERANGOON RD',
                    'KALLANG BAHRU',
                    'BEACH RD',
                    'TEMASAK BOULEVARD',
                    'KALLANG BAHRU'
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "107M",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    109: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "109",
                destination: "> CHANGI VILLAGE TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "YIO CHU KANG RD",
                    "HOUGANG AVE 9",
                    "SENGKANG EAST RD",
                    "PASIR RIS DR 1",
                    "LOYANG AVE"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "109",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "109",
                destination: "> SERANGOON INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "LOYANG AVE",
                    "PASIR RIS DR 1",
                    "SENGKANG EAST RD",
                    "HOUGANG AVE 9",
                    "YIO CHU KANG RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "109",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "109A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "109A",
                destination: "HOUGANG AVE 4",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "109A",
                    landmark: "HOUGANG AVE 4 (BLK 913)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "109A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    111: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "111",
                destination: "GHIM MOH TER - TEMASEK AVE",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "COMMONWEALTH AVE",
                    "TANGLIN RD",
                    "ORCHARD RD",
                    "STAMFORD RD",
                    "ORCHARD BOULEVARD",
                    "TANGLIN RD",
                    "COMMONWEALTH AVE"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "111",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    112: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "112",
                destination: "HOUGANG CTRL INT-HOUGANG ST 92",
                destinationFont: "LECIP-6:3",
                scrolls: [
                    'HOUGANG AVE 7',
                    'TAMPINES RD',
                    'HOUGANG AVE 2',
                    'HOUGANG AVE 9'
                ],
                scrollFont: "LECIP-6:3"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "112",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "112A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "112A",
                destination: "KOVAN STN",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "112A",
                    terminateAt: "UPP S'GOON RD",
                    landmark: "(KOVAN STN EXIT B)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "112A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "112B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "112B",
                destination: "HOUGANG AVE 7",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "HOUGANG AVE 7",
                    topFont: "Mobitec-7:7",
                    bottom: "(OPP BLK 321)",
                    bottomFont: "Mobitec-7:7",
            
                    serviceNumber: "112B"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "112B",
                font: "LECIP-20:6",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "112B",
                destination: "HOUGANG AVE 7",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "112B",
                    landmark: "HOUGANG AVE 7 (OPP BLK 321)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "112B",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    113: { //TODO SCROLLS
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "113",
                destination: "HOUGANG INT-U. PAYA LEBAR",
                destinationFont: "LECIP-6:3",
                scrolls: [
                    'HOUGANG AVE 8',
                    'HOUGANG AVE 10',
                    'UPP SERANGOON RD',
                    'HOUGANG ST 21',
                    'LORONG AH SOO',
                    'HOUGANG ST 21',
                    'UPP SERANGOON RD',
                    'HOUGANG AVE 10',
                    'HOUGANG AVE 8'
                ],
                scrollFont: "LECIP-6:3"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "113",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "113A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "113A",
                destination: "KOVAN STN",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "113A",
                    landmark: "U. S'GOON RD (KOVAN STN)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "113A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "114B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "114",
                destination: "BUANGKOK STN-BUANGKOK CR",
                destinationFont: "LECIP-6:3",
                scrolls: [
                    'BUANGKOK LINK',
                    'BUANGKOK CRES',
                    'BUANGKOK DR'
                ],
                scrollFont: "LECIP-6:3"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "114",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "114A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "114A",
                destination: "BUANGKOK CRESCENT",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "114A",
                    terminateAt: "BUANGKOK",
                    landmark: "CRES (BLK 998B)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "114A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "114": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "114",
                destination: "BUANGKOK INT - BUANGKOK CR",
                destinationFont: "LECIP-6:3",
                scrolls: [
                    'BUANGKOK DR',
                    'BUANGKOK LK',
                    'BUANGKOK CRES'
                ],
                scrollFont: "LECIP-6:3"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "114",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    115: { // TODO:  SCROLLS
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "115",
                destination: "HOUGANG ST 21 - HOUGANG AVE 3",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    'HOUGANG AVE 1',
                    "UPPER SERANGOON RD"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "115",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    116: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "116",
                destination: "HOUGANG CTRL INT-S'GOON CTRL",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "HOUGANG AVE 4",
                    "HOUGANG AVE 9",
                    "YIO CHU KANG RD",
                    "SERANGOON CENTRAL",
                    "HOUGANG AVE 9"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "116",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "116A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "116A",
                destination: "SERANGOON STN",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "116A",
                    terminateAt: "S'GOON CTRL",
                    landmark: "(S'GOON STN EXIT C/BLK 201)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "116A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    117: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "117",
                destination: "> SEMBAWANG INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "PUNGGOL WAY",
                    "SELETAR A'SPACE DR",
                    "YISHUN AVE 1",
                    "YISHUN AVE 2",
                    "CANBERRA LINK",
                    "SEMBAWANG WAY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "117",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "117",
                destination: "> PUNGGOL COAST INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "SEMBAWANG WAY",
                    "CANBERRA LINK",
                    "YISHUN AVE 2",
                    "YISHUN AVE 1",
                    "SELETAR A'SPACE CR",
                    "PUNGGOL WAY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "117",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "117A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "117A",
                destination: "KHATIB STN",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "117A",
                    terminateAt: "YISHUN AVE 2",
                    landmark: "BEF KHATIB STN"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "117A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "117B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "117B",
                destination: "YISHUN STN",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "117B",
                    terminateAt: "YISHUN AVE 2",
                    landmark: "OPP YISHUN STN"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "117B",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "117M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "117M",
                destination: "> SEMBAWANG INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "PUNGGOL WAY",
                    "SELETAR A'SPACE DR",
                    "SELETAR A'SPACE LINK",
                    "YISHUN AVE 1",
                    "YISHUN AVE 2",
                    "CANBERRA LINK",
                    "SEMBAWANG WAY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "117M",
                font: "LECIP-20:6",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "117M",
                destination: "> PUNGGOL COAST INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "SEMBAWANG WAY",
                    "CANBERRA LINK",
                    "YISHUN AVE 2",
                    "YISHUN AVE 1",
                    "SELETAR A'SPACE LINK",
                    "SELETAR A'SPACE DR",
                    "PUNGGOL WAY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "117M",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "117P": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "117",
                destination: "> SEMBAWANG INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "PUNGGOL WAY",
                    "SELETAR A'SPACE DR",
                    "YISHUN AVE 1",
                    "YISHUN AVE 2",
                    "CANBERRA LINK",
                    "SEMBAWANG WAY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "117",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "117",
                destination: "> PUNGGOL INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "SEMBAWANG WAY",
                    "CANBERRA LINK",
                    "YISHUN AVE 2",
                    "YISHUN AVE 1",
                    "SELETAR A'SPACE CR",
                    "PUNGGOL WAY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "117",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "117Z": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "117M",
                destination: "> SEMBAWANG INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "PUNGGOL WAY",
                    "SELETAR A'SPACE DR",
                    "SELETAR A'SPACE LINK",
                    "YISHUN AVE 1",
                    "YISHUN AVE 2",
                    "CANBERRA LINK",
                    "SEMBAWANG WAY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "117M",
                font: "LECIP-20:6",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "117M",
                destination: "> PUNGGOL INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "SEMBAWANG WAY",
                    "CANBERRA LINK",
                    "YISHUN AVE 2",
                    "YISHUN AVE 1",
                    "SELETAR A'SPACE LINK",
                    "SELETAR A'SPACE DR",
                    "PUNGGOL WAY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "117M",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    118: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "118",
                destination: "> CHANGI BUSINESS PARK",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "PUNGGOL WAY",
                    "TAMPINES AVE 10",
                    "TAMPINES AVE 8, 1",
                    "SIMEI AVE"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "118",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "118",
                destination: "> PUNGGOL",
                destinationFont: "LECIP-10",
                scrolls: [
                    "SIMEI AVE",
                    "TAMPINES AVE 1, 8",
                    "TAMPINES AVE 10",
                    "PUNGGOL WAY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "118",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    119: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "119",
                destination: "> HOUGANG ST 21 (LOOP)",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "PUNGGOL FIELD",
                    "SENGKANG EAST WAY",
                    "RIVERVALE DR",
                    "HOUGANG AVE 10",
                    "UPPER SERANGOON RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "119",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "119",
                destination: "> PUNGGOL",
                destinationFont: "LECIP-10",
                scrolls: [
                    "UPPER SERANGOON RD",
                    "HOUGANG AVE 10",
                    "RIVERVALE DR",
                    "SENGKANG EAST WAY",
                    "PUNGGOL FIELD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "119",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    120: { //todo font
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "120",
                destination: "KG BAHRU TER-T.BLANGAH HTS",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "JALAN BUKIT MERAH",
                    "TELOK BLANGAH HTS",
                    "TELOK BLANGAH RD",
                    "ALEXANDRA RD", // <-
                    "TIONG BAHRU RD"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "120",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    121: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "121",
                destination: "SHENTON WAY TER-T.BLANGAH",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "SHENTON WAY",
                    "ZION RD",
                    "GANGES AVE",
                    "JALAN BUKIT MERAH",
                    "LOWER DELTA RD",
                    "TELOK BLANGAH RISE",
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "121",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "121K": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "121",
                destination: "KG.BAHRU TER-T.BLANGAH",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "GANGES AVE",
                    "TIONG BAHRU RD",
                    "KIM TIAN RD",
                    "LOWER DELTA RD",
                    "TELOK BLANGAH RISE",
                    "LOWER DELTA RD",
                    "KIM TIAN RD",
                    "TIONG BAHRU RD",
                    "GANGES AVE"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "121",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "121N": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "121",
                destination: "NEW BRIDGE RD TER-T.BLANGAH",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "GANGES AVE",
                    "TIONG BAHRU RD",
                    "KIM TIAN RD",
                    "LOWER DELTA RD",
                    "TELOK BLANGAH RISE",
                    "LOWER DELTA RD",
                    "KIM TIAN RD",
                    "TIONG BAHRU RD",
                    "GANGES AVE"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "121",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    122: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "122",
                destination: "KG.BAHRU TER-C'WEALTH DR",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "TIONG BAHRU RD",
                    "ALEXANDRA RD",
                    "MARGARET DR",
                    "COMMONWEALTH DR",
                    "MARGRET DR",
                    "ALEXANDRA RD",
                    "TIONG BAHRU RD"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "122",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    123: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "123",
                destination: "> SENTOSA",
                destinationFont: "LECIP-10",
                scrolls: [
                    "QUEENSWAY",
                    "HOLLAND RD",
                    "ORCHARD RD",
                    "HAVELOCK RD",
                    "TIONG BAHRU RD",
                    "LOWER DELTA RD",
                    "BUKIT PURMEI AVE"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "123",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "123",
                destination: "> BUKIT MERAH INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "BUKIT PURMEI AVE",
                    "LOWER DELTA RD",
                    "TIONG BAHRU RD",
                    "HAVELOCK RD",
                    "ORCHARD BLVD",
                    "HOLLAND RD",
                    "QUEENSWAY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "123",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "123A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "123A",
                destination: "TIONG BAHRU RD",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "123A",
                    terminateAt: "TIONG BAHRU RD",
                    landmark: "(TIONG BAHRU PLAZA)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "123A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
   "123M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "123M",
                destination: "> TIONG BAHRU",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "KAMPONG BAHRU RD",
                    "LOWER DELTA RD (BLK 40)",
                    "BUKIT PURMEI AVE",
                    "LOWER DELTA RD (BLK 129)",
                    "TIONG BAHRU STN",
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "123M",
                font: "LECIP-20:6",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "123M",
                destination: "> HARBOURFRONT INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TIONG BAHRU STN",
                    "LOWER DELTA RD (BLK 25B)",
                    "BUKIT PURMEI AVE",
                    "LOWER DELTA RD (BLK 105)",
                    "TELOK BLANGAH RD"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "123M",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
     "123X": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "123M",
                destination: "HARBOURFRONT - TIONG BAHRU",
                destinationFont: "LECIP-6:3",
                scrolls: [
                    'BUKIT PURMEI AVE',
                    'LOWER DELTA RD',
                    'TIONG BAHRU RD',
                    'LOWER DELTA RD',
                    'BUKIT PURMEI AVE'
                ],
                scrollFont: "LECIP-6:3"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "123M",
                font: "LECIP-20:6",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "123M",
                destination: "TIONG BAHRU-BUKIT PURMEI",
                destinationFont: "LECIP-6:4",
                scrolls: [{
                        renderType: "brandedSvc",
                        serviceNumber: "123M",
                        branding: "BT PURMEI AVE",
                        font: "LECIP-20:6",
                        spacing: 2
                    },
                    "LOWER DELTA RD"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "123M",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    124: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "124",
                destination: "> HARBOURFRONT INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "MOULMEIN RD",
                    "ORCHARD RD",
                    "NEW BRIDGE RD",
                    "KAMPONG BAHRU RD",
                    "TELOK BLANGAH WAY",
                    "TELOK BLANGAH HTS"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "124",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "124",
                destination: "> ST.MICHAEL'S TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TELOK BLANGAH HTS",
                    "TELOK BLANGAH WAY",
                    "KAMPONG BAHRU RD",
                    "NEW BRIDGE RD",
                    "EU TONG SEN ST",
                    "ORCHARD TURN",
                    "MOULMEIN RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "124",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "124A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "124A",
                destination: "TELOK BLANGAH DRIVE",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "124A",
                    terminateAt: "TELOK",
                    landmark: "BLANGAH DR (BLK 50)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "124A",
                font: "LECIP-20:6",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "124A",
                destination: "> TELOK BLANGAH DR",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TERMINATING AT",
                    "ST MICHAEL'S TO",
                    "MOULMEIN RD",
                    "ORCHARD RD",
                    "NEW BRIDGE RD",
                    "KAMPONG BAHRU RD",
                    "TELOK BLANGAH WAY",
                    "TELOK BLANGAH HTS"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "124A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "124T": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "124",
                destination: "> TELOK BLANGAH DR",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "MOULMEIN RD",
                    "ORCHARD RD",
                    "NEW BRIDGE RD",
                    "KAMPONG BAHRU RD",
                    "TELOK BLANGAH WAY",
                    "TELOK BLANGAH HTS"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "124",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "124",
                destination: "> ST.MICHAEL'S TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TELOK BLANGAH HTS",
                    "TELOK BLANGAH WAY",
                    "KAMPONG BAHRU RD",
                    "NEW BRIDGE RD",
                    "EU TONG SEN ST",
                    "ORCHARD TURN",
                    "MOULMEIN RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "124",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    125: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "125",
                destination: "> SIMS DR",
                destinationFont: "LECIP-10",
                scrolls: [
                    'BALESTIER RD',
                    'SERANGOON RD',
                    'KALLANG WAY',
                    'ALJUNIED RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "125",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "125",
                destination: "> ST.MICHAEL'S TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'ALJUNIED RD',
                    'KALLANG WAY',
                    'BENDEMEER RD',
                    'BALESTIER RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "125",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "125A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "125A",
                destination: "MACPHERSON RD",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "125A",
                    terminateAt: "MACPHERSON",
                    landmark: "RD (BEF SIEMENS CTR)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "125A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    127: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "127",
                destination: "TAMP INT-TAMP IND AVE 5",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "TAMPINES CONCOURSE",
                    "TAMPINES AVE 9, 10",
                    "TAMPINES IND AVE 5",
                    "TAMPINES RD"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "127",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "127A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "127A",
                destination: "TAMPINES NORTH DR 1",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "127A",
                    terminateAt: "TAMPINES",
                    landmark: "NORTH DR 1 (OPP BLK 610C)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "127A",
                font: "LECIP-20:6",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "127A",
                destination: "TAMPINES AVE 9",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "127A",
                    landmark: "TAMPINES AVE 9 (BLK 742A)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "127A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    128: { // TODO: SCROLLS
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "128",
                destination: "> SHENTON WAY TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "ANG MO KIO AVE 8",
                    "BISHAN RD",
                    "SCOTTS RD",
                    "ORCHARD RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "128",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "128",
                destination: "> ANG MO KIO DEPOT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "ROBINSON RD",
                    "STAMFORD RD",
                    "ORCHARD TURN",
                    "SCOTTS RD",
                    "BISHAN RD",
                    "ANG MO KIO AVE 8"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "128",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    129: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "129",
                destination: "> ST. MICHAEL'S TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TAMPINES NORTH DR 2",
                    "TAMPINES AVE 4",
                    "TAMPINES AVE 1",
                    "BRADDELL RD",
                    "LOR 2 TOA PAYOH",
                    "BALESTIER RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "129",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "129",
                destination: "> TAMPINES NORTH INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "BALESTIER RD",
                    "LOR 2 TOA PAYOH",
                    "BRADDELL RD",
                    "TAMPINES AVE 1",
                    "TAMPINES AVE 4",
                    'TAMPINES NORTH DR 2'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "129",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "129A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "129A",
                destination: "BARTLEY STN",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "TERMINATES AT",
                    topFont: "LECIP-7:5",
                    bottom: "BARTLEY STN EXIT A",
                    bottomFont: "LECIP-7:5",
            
                    serviceNumber: "129A"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "129A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "129B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "129B",
                destination: "TAMPINES AVE 1",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "129B",
                    terminateAt: "TAMP AVE 1",
                    landmark: "(OPP TEMASEK POLY EAST GATE)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "129B",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "129C": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "129",
                destination: "> ST. MICHAEL'S TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TAMPINES AVE 4",
                    "TAMPINES AVE 1",
                    "BRADDELL RD",
                    "LOR 1 TOA PAYOH",
                    "BALESTIER RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "129",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "129",
                destination: "> TAMP CONCOURSE INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "BALESTIER RD",
                    "LOR 1 TOA PAYOH",
                    "BRADDELL RD",
                    "TAMPINES AVE 1",
                    "TAMPINES AVE 4"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "129",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    130: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "130",
                destination: "> SHENTON WAY TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'SIN MING RD',
                    'BALESTIER RD',
                    'JALAN BESAR',
                    'SHENTON WAY'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "130",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "130",
                destination: "> ANG MO KIO INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'ROBINSON RD',
                    'SERANGOON RD',
                    'BALESTIER RD',
                    'SIN MING RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "130",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "130A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "130A",
                destination: "SIN MING RD",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "130A",
                    landmark: "SIN MING RD (BLK 25)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "130A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    131: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "131",
                destination: "> BUKIT MERAH INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'THOMSON RD',
                    'OWEN RD',
                    'SHENTON WAY',
                    'TELOK BLANGAH RD',
                    'BUKIT PURMEI AVE'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "131",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "131",
                destination: "> ST.MICHAEL'S TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'BUKIT PURMEI AVE',
                    'TELOK BLANGAH RD',
                    'CECIL ST',
                    'OWEN RD',
                    'THOMSON RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "131",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "131A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "131A",
                destination: "SHENTON WAY",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "131A",
                    landmark: "SHENTON WAY (OPP AXA TWR)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "131A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "131M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "131M",
                destination: "BUKIT MERAH INT-BUKIT PURMEI",
                destinationFont: "LECIP-6:3",
                scrolls: [
                    'JALAN BUKIT MERAH',
                    'LOWER DELTA RD',
                    'BUKIT PURMEI AVE',
                    'LOWER DELTA RD',
                    'JALAN BUKIT MERAH'
                ],
                scrollFont: "LECIP-6:3"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "131M",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    132: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "132",
                destination: "> BUKIT MERAH INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'HOUGANG AVE 2',
                    'ANG MO KIO AVE 3',
                    'UPPER THOMSON RD',
                    'THOMSON RD',
                    'STEVENS RD',
                    'TANGLIN RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "132",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "132",
                destination: "> HOUGANG CTRL INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'TANGLIN RD',
                    'STEVENS RD',
                    'THOMSON RD',
                    'UPPER THOMSON RD',
                    'ANG MO KIO AVE 3',
                    'HOUGANG AVE 2'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "132",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    133: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "133",
                destination: "> SHENTON WAY TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'ANG MO KIO AVE 1',
                    'SERANGOON AVE 2',
                    'BENDEMEER RD',
                    'VICTORIA ST',
                    'BAYFRONT AVE'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "133",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "133",
                destination: "> ANG MO KIO INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'BAYFRONT AVE',
                    'VICTORIA ST',
                    'SERANGOON RD',
                    'SERANGOON AVE 2',
                    'ANG MO KIO AVE 1'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "133",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "133A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "133A",
                destination: "TEMASEK AVE",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "133A",
                    terminateAt: "TEMASEK AVE",
                    landmark: "(OPP RITZ CARLTON)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "133A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "133M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "133M",
                destination: "MARINA CENTRE (LOOP)",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'SHENTON WAY'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "133M",
                font: "LECIP-20:6",
                spacing: 2
            }
        },
    },
    134: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "134",
                destination: "SIMS PL TER-MARINE TERR",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "GEYLANG EAST CENTRAL",
                    "TANJONG KATONG RD",
                    "MARINE PARADE RD",
                    "MARINE TERRACE",
                    "MARINE PARADE RD",
                    "TANJONG KATONG RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "134",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
    },
    135: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "135",
                destination: "> JLN KEMBANGAN",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'SERANGOON AVE 2',
                    'UPPER ALJUNIED RD',
                    'MACPHERSON EST',
                    'TANJONG KATONG RD',
                    'MARINE PARADE RD',
                    'EAST COAST RD',
                    'FRANKEL AVE'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "135",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "135",
                destination: "> ANG MO KIO INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'FRANKEL AVE',
                    'EAST COAST RD',
                    'MARINE PARADE RD',
                    'TANJONG KATONG RD',
                    'MACPHERSON EST',
                    'UPPER ALJUNIED RD',
                    'SERANGOON AVE 2'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "135",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "135A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "135A",
                destination: "MARINE PARADE RD",
                destinationFont: "LECIP-10",
                scrolls: [
                    {
                    renderType: "swt",
                    serviceNumber: "135A",
                    landmark: "M. PARADE RD (VICTORIA SCH)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "135A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "135S": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "135",
                destination: "> SIGLAP RD",
                destinationFont: "LECIP-10",
                scrolls: [
                    'SERANGOON AVE 2',
                    'UPPER ALJUNIED RD',
                    'MACPHERSON EST',
                    'TANJONG KATONG RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "135",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "135",
                destination: "> ANG MO KIO INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'TANJONG KATONG RD',
                    'MACPHERSON EST',
                    'UPPER ALJUNIED RD',
                    'SERANGOON AVE 2'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "135",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    136: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "136",
                destination: "> ANG MO KIO",
                destinationFont: "LECIP-10",
                scrolls: [
                    'PUNGGOL FIELD',
                    'SENGKANG EAST WAY',
                    'RIVERVALE DR',
                    'UPP SERANGOON RD',
                    'YIO CHU KANG RD',
                    'SERANGOON GARDEN WAY',
                    'ANG MO KIO AVE 1'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "136",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "136",
                destination: "> PUNGGOL",
                destinationFont: "LECIP-10",
                scrolls: [
                    'ANG MO KIO AVE 1',
                    'SERANGOON GARDEN WAY',
                    'YIO CHU KANG RD',
                    'UPP SERANGOON RD',
                    'RIVERVALE DR',
                    'SENGKANG EAST WAY',
                    'PUNGGOL FIELD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "136",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    137: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "137",
                destination: "> UPP EAST COAST TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'SIMS AVE',
                    'UBI AVE 1',
                    'KAKI BUKIT AVE 3',
                    'BEDOK NORTH AVE 2',
                    'BEDOK SOUTH RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "137",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "137",
                destination: "> SIMS PLACE TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'BEDOK SOUTH RD',
                    'BEDOK NTH AVE 2',
                    'KAKI BUKIT AVE 3',
                    'UBI AVE 1',
                    'GEYLANG RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "137",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "137A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "137A",
                destination: "BEDOK NORTH STN",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "137A",
                    terminateAt: "BEDOK NORTH",
                    landmark: "(BEDOK NTH STN EXIT A)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "137A",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    138: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "138",
                destination: "> SINGAPORE ZOO",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'ANG MO KIO AVE 3, 6, 5',
                    'YIO CHU KANG RD',
                    'UPP THOMSON RD',
                    'MANDAI RD',
                    'MANDAI LAKE RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "138",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "138",
                destination: "> ANG MO KIO INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'MANDAI LAKE RD',
                    'MANDAI RD',
                    'UPP THOMSON RD',
                    'YIO CHU KANG RD',
                    'ANG MO KIO AVE 5, 6, 3'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "138",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "138A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "138A",
                destination: "SINGAPORE ZOO",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "138A",
                    landmark: "MANDAI LAKE RD (S'PORE ZOO)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "138A",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    "138B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "138B",
                destination: "ANG MO KIO AVE 5",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "138B",
                    landmark: "AMK AVE 5 (OPP BLK 604)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "138B",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    "138C": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "138C",
                destination: "SPRINGLEAF STN",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "138C",
                    terminateAt: "UPP THOMSON",
                    landmark: "RD (SPRINGLEAF STN EXIT 2)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "138C",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    "138M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "138M",
                destination: "ANG MO KIO",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    {
                        renderType: "destScroll",
                        top: "ANG MO KIO INT",
                        topFont: "LECIP-7:5",
                        bottom: "AMK POLYCLINIC (LOOP)",
                        bottomFont: "LECIP-7:5",
                
                        serviceNumber: "138M"
                    },
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "138M",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    139: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "139",
                destination: "> BUKIT MERAH INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "JALAN BAHAGIA",
                    'BALESTIER RD',
                    'BENCOOLEN ST',
                    'RIVER VALLEY RD',
                    'ALEXANDRA RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "139",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "139",
                destination: "> TOA PAYOH INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'ALEXANDRA RD',
                    'RIVER VALLEY RD',
                    'SELEGIE RD',
                    'BALESTIER RD',
                    "JALAN BAHAGIA"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "139",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "139A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "139A",
                destination: "JLN BAHAGIA",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "139A",
                    terminateAt: "JLN BAHAGIA",
                    landmark: "(BET BLKS 33/34)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "139A",
                font: "LECIP-20:6",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "139A",
                destination: "KIM KEAT RD",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "139A",
                    terminateAt: "KIM KEAT RD",
                    landmark: "(OPP JUMBO IND BLDG)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "139A",
                font: "LECIP-20:6",
                spacing: 2
            }
        },
    },
    "139M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "139M",
                destination: "TOA PAYOH INT-JLN BAHAGIA",
                destinationFont: "LECIP-6:3",
                scrolls: [
                    "BALESTIER RD",
                    "JLN RAJAH",
                    "JLN BAHAGIA",
                    "BALESTIER RD"
                ],
                scrollFont: "LECIP-6:3"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "139M",
                font: "LECIP-20:6",
                spacing: 2
            }
        },
    },
    140: { //CHECK SCROLL FONT
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "140",
                destination: "LOR 1 GEYLANG TER-ST WILFRED RD",
                destinationFont: "LECIP-6:3",
                scrolls: [
                    'GEYLANG BAHRU'
                ],
                scrollFont: "LECIP-6:3"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "140",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    141: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "141",
                destination: "> TOA PAYOH INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'LAVENDER ST',
                    'JALAN BESAR',
                    'RANGOON RD',
                    'THOMSON RD',
                    'LOR 1 TOA PAYOH'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "141",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "141",
                destination: "> LOR 1 GEYLANG TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'LOR 1 TOA PAYOH',
                    'THOMSON RD',
                    'RANGOON RD',
                    'SERANGOON RD',
                    'LAVENDER ST'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "141",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    142: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "142",
                destination: "TOA PAYOH INT-POTONG P. AVE 1",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    'LOR 6 TOA PAYOH',
                    'JLN TOA PAYOH',
                    'UPP SERANGOON RD',
                    'POTONG PASIR AVE 1, 3, 2'
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "142",
                font: "LECIP-20:9",
                spacing: 2

            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "142",
                destination: "TOA PAYOH INT-POTONG P. AVE 1",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    {
                        renderType: "message",
                        text: "142",
                        font: "LECIP-20:12",
                        spacing: 5
                    },
                    'LOR 6 TOA PAYOH',
                    'JLN TOA PAYOH',
                    'UPP SERANGOON RD',
                    'POTONG PASIR AVE 1, 3, 2'
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "142",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "142A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "142A",
                destination: "UPP SERANGOON RD",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "142A",
                    landmark: "UPP SERANGOON RD (SAINT RITZ)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "142A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    143: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "143",
                destination: "> TOA PAYOH",
                destinationFont: "LECIP-10",
                scrolls: [
                    'JURONG TOWN HALL RD',
                    'WEST COAST RD',
                    'PASIR PANJANG RD',
                    'TELOK BLANGAH RD',
                    'KAMPONG BAHRU RD',
                    'EU TONG SEN ST',
                    'ORCHARD BOULEVARD',
                    'THOMSON RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "143",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "143",
                destination: "> JURONG EAST",
                destinationFont: "LECIP-10",
                scrolls: [
                    'THOMSON RD',
                    'ORCHARD RD',
                    'NEW BRIDGE RD',
                    'TELOK BLANGAH RD',
                    'PASIR PANJANG RD',
                    'WEST COAST RD',
                    'JURONG TOWN HALL RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "143",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "143A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "143A",
                destination: "TEBAN GARDENS RD",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "143A",
                    terminateAt: "TEBAN GDNS",
                    landmark: "RD (BEF HASANAH MQUE)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "143A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "143M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "143M",
                destination: "JUR E - JUR TOWN HALL RD",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    'JURONG TOWN HALL RD',
                    'TEBAN GARDENS RD',
                    'WEST COAST RD',
                    'PANDAN GARDENS',
                    'WEST COAST RD',
                    'TEBAN GARDENS RD'
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "143M",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    145: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "145",
                destination: "> BUONA VISTA TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'BALESTIER RD',
                    'LAVENDER ST',
                    'NORTH BRIDGE RD',
                    'TANJONG PAGAR RD',
                    'TELOK BLANGAH RD',
                    'HENDERSON RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "145",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "145",
                destination: "> TOA PAYOH INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'HENDERSON RD',
                    'TELOK BLANGAH RD',
                    'TANJONG PAGAR RD',
                    'VICTORIA ST',
                    'LAVENDERS ST',
                    'BALESTIER RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "145",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "145A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "145A",
                destination: "HENDERSON RD",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "145A",
                    landmark: "HENDERSON RD (BLK 1)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "145A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    146: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "146",
                destination: "> BARTLEY RD",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    {
                        renderType: "destScroll",
                        top: "BARTLEY  RD",
                        topFont: "LECIP-14:6",
                
                        serviceNumber: "146"
                    },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "146",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "146",
                destination: "> WOODLEIGH INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    {
                        renderType: "destScroll",
                        top: "WOODLEIGH  INT",
                        topFont: "LECIP-14:6",
                
                        serviceNumber: "146"
                    },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "146",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "146Z": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "146",
                destination: "BARTLEY RD - BIDADARI PK DR",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    'BARTLEY RD',
                    'UPPER SERANGOON RD',
                    'BIDADARI PARK DR'
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "146",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    147: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "147",
                destination: "> CLEMENTI INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "HOUGANG AVE 8",
                    "YIO CHU KANG RD",
                    "UPP SERANGOON RD",
                    "BENDEMEER RD",
                    "JALAN BESAR",
                    "NEW BRIDGE RD",
                    "JALAN BUKIT MERAH",
                    "COMMONWEALTH AVE WEST"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "147",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "147",
                destination: "> HOUGANG CTRL INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "COMMONWEALTH AVE WEST",
                    "JALAN BUKIT MERAH",
                    "EU TONG SEN ST",
                    "SELEGIE RD",
                    "SERANGOON RD",
                    "UPP SERANGOON RD",
                    "YIO CHU KANG RD",
                    "HOUGANG AVE 8"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "147",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "147A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "147A",
                destination: "NEW BRIDGE RD",
                destinationFont: "LECIP-10",
                scrolls: [
            {
                renderType: "swt",
                serviceNumber: "147A",
                terminateAt: "NEW BRIDGE RD",
                landmark: "(AFT DUNXTON PLAIN PK)"
            },
            ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "147A",
                font: "LECIP-20:6",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "147A",
                destination: "NEW BRIDGE RD",
                destinationFont: "LECIP-10",
                scrolls: [
            {
                renderType: "swt",
                serviceNumber: "147A",
                terminateAt: "NEW BRIDGE RD",
                landmark: "(OPP PEARL'S CTR)"
            },
            ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "147A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "147E": {
        1: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "147e",
                image: "express",
                destination: "EXPRESS 147e"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "147e",
                font: "LECIP-20:6",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "147e",
                image: "fastForward",
                destination: "FFW 147e"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "147e",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    148: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "148",
                destination: "WOODLEIGH INT - POTONG PASIR AVE 1",
                destinationFont: "LECIP-6:4",
                scrolls: [
                {
                    renderType: "centreMessageServiceScroll",

                    top: "WOODLEIGH INT -",
                    topFont: "LECIP-7:5",

                    bottom: "POTONG PASIR AVE 1 (LOOP)",
                    bottomFont: "LECIP-7:5",

                    serviceNumber: "148",
                },  
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "148",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    150: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "150",
                destination: "EUNOS INT-MARINE TERR",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'STILL RD',
                    'TELOK KURAU RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "150",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    151: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "151",
                destination: "> KENT RIDGE TER",
                destinationFont: "LECIP-10",
                scrolls: [
                    'HOUGANG AVE 5, 7, 3',
                    'MACPHERSON RD',
                    'JALAN TOA PAYOH',
                    'BUKIT TIMAH RD',
                    'CLEMENTI RD',
                    'KENT RIDGE CRES'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "151",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "151",
                destination: "> HOUGANG CTRL INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'KENT RIDGE CRES',
                    'CLEMENTI RD',
                    'DUNEARN RD',
                    'JALAN TOA PAYOH',
                    'MACPHERSON RD',
                    'HOUGANG AVE 3, 7, 5'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "151",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "151A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "151A",
                destination: "DUNEARN RD",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "151A",
                    terminateAt: "DUNEARN RD",
                    landmark: "(AFT KHEAM HOCK RD)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "151A",
                font: "LECIP-20:6",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "151A",
                destination: "> DUNEARN RD",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'KENT RIDGE CRES',
                    'CLEMENTI RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "151A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "151E": {
        1: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "151e",
                image: "express",
                destination: "EXPRESS 151e"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "151e",
                font: "LECIP-20:6",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "151e",
                image: "fastForward",
                destination: "FFW 151e"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "151e",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    153: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "153",
                destination: "> BUKIT MERAH INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'UPPER SERANGOON RD',
                    'BRADDELL RD',
                    'TOA PAYOH CTRL',
                    'WHITLEY RD',
                    'FARRER RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "153",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "153",
                destination: "> HOUGANG CTRL INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'FARRER RD',
                    'WHITLEY RD',
                    'TOA PAYOH CTRL',
                    'BRADDELL RD',
                    'UPPER SERANGOON RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "153",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    154: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "154",
                destination: "> EUNOS INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "YUAN CHING RD",
                    "AYE",
                    "COMMONWEALTH AVE WEST",
                    "CLEMENTI RD",
                    "DUNEARN RD",
                    "JALAN TOA PAYOH",
                    "PAYA LEBAR RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "154",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "154",
                destination: "> BOON LAY INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "PAYA LEBAR RD",
                    "JALAN TOA PAYOH",
                    "BUKIT TIMAH RD",
                    "CLEMENTI RD",
                    "C'WEALTH AVE WEST",
                    "AYE",
                    "YUAN CHING RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "154",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "154A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "154A",
                destination: "LAKESIDE STN",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "154A",
                    landmark: "BOON LAY WAY (LAKESIDE STN)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "154A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "154B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "154B",
                destination: "CLEMENTI RD",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "154B",
                    landmark: "CLEMENTI RD (NGEE ANN POLY)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "154B",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    155: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "155",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'BRADDELL RD',
                    'UPP ALJUNIED RD',
                    'GEYLANG EAST CTRL',
                    'CIRCUIT RD',
                    'TELOK KURAU RD',
                    'EAST COAST RD',
                    'BEDOK STH AVE 1'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "155",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "155",
                destination: "> TOA PAYOH INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'BEDOK STH AVE 1',
                    'EAST COAST RD',
                    'TELOK KURAU RD',
                    'CIRCUIT RD',
                    'GEYLANG EAST CTRL',
                    'UPP ALJUNIED RD',
                    'BRADDELL RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "155",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "155A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "155A",
                destination: "MARINE PARADE RD",
                destinationFont: "LECIP-10",
                scrolls: [
                    {
                    renderType: "swt",
                    serviceNumber: "155A",
                    landmark: "M. PARADE RD (VICTORIA SCH)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "155A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    156: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "156",
                destination: "> CLEMENTI INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'SENGKANG EAST AVE',
                    'BUANGKOK GREEN',
                    'YIO CHU KANG RD',
                    'BISHAN RD',
                    'BUKIT TIMAH RD',
                    'SIXTH AVE',
                    'ULU PANDAN RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "156",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "156",
                destination: "> BUANGKOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "ULU PANDAN RD",
                    "SIXTH AVE",
                    "DUNEARN RD",
                    "THOMSON RD",
                    "BISHAN RD",
                    "YIO CHU KANG RD",
                    "BUANGKOK GREEN",
                    "SENGKANG EAST AVE"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "156",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "156S": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "156",
                destination: "> CLEMENTI INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'SENGKANG EAST RD',
                    'BUANGKOK GREEN',
                    'YIO CHU KANG RD',
                    'BISHAN RD',
                    'BUKIT TIMAH RD',
                    'SIXTH AVE',
                    'ULU PANDAN RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "156",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "156",
                destination: "> SENGKANG INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "ULU PANDAN RD",
                    "SIXTH AVE",
                    "DUNEARN RD",
                    "THOMSON RD",
                    "BISHAN RD",
                    "YIO CHU KANG RD",
                    "BUANGKOK GREEN",
                    "SENGKANG EAST RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "156",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },    
    "156A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "156A",
                destination: "THOMSON RD",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "156A",
                    terminateAt: "THOMSON RD",
                    landmark: "(OPP OLD POLICE ACADEMY)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "156A",
                font: "LECIP-20:6",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "156A",
                destination: "> THOMSON RD",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'SENGKANG'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "156A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    157: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "157",
                destination: "> TOA PAYOH INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "JURONG WEST AVE 1",
                    "JURONG EAST AVE 1",
                    "BUKIT BATOK EAST AVE 3",
                    "JALAN JURONG KECHIL",
                    "DUNEARN RD",
                    "LORNIE RD",
                    "BRADDELL RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "157",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "157",
                destination: "> BOON LAY INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "BRADDELL RD",
                    "LORNIE RD",
                    "BUKIT TIMAH RD",
                    "JALAN JURONG KECHIL",
                    "BUKIT BATOK EAST AVE 3",
                    "JURONG EAST AVE 1",
                    "JURONG WEST AVE 1"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "157",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    158: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "158",
                destination: "> RHU CROSS",
                destinationFont: "LECIP-10",
                scrolls: [
                    'UPPER PAYA LEBAR RD',
                    'CIRCUIT RD',
                    'ALJUNIED RD',
                    'MOUNTBATTEN RD', 
                    'TANJONG RHU RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "158",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "158",
                destination: "> SERANGOON INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'TANJONG RHU RD',
                    'MOUNTBATTEN RD',
                    'ALJUNIED RD',
                    'CIRCUIT RD',
                    'UPPER PAYA LEBAR RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "158",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "158A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "158A",
                destination: "ALJUNIED STN",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "158A",
                    terminateAt: "ALJUNIED RD",
                    landmark: "(OPP ALJUNIED STN)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "158A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    159: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "159",
                destination: "> TOA PAYOH INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'SENGKANG EAST RD',
                    'HOUGANG AVE 9',
                    "S'GOON NTH AVE 5, 6",
                    'ANG MO KIO AVE 5, 8',
                    'LOR CHUAN'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "159",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "159",
                destination: "> SENGKANG INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'LOR CHUAN',
                    'ANG MO KIO AVE 8, 5',
                    "S'GOON NTH AVE 6, 5",
                    'HOUGANG AVE 9',
                    'SENGKANG EAST RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "159",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "159A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "159A",
                destination: "ANG MO KIO STN",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "159A",
                    landmark: "AMK AVE 6 (AMK STATION)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "159A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "159B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "159B",
                destination: "ANG MO KIO AVE 5",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "159B",
                    landmark: "AMK AVE 5 (ITE COLLEGE CTRL)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "159B",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    160: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "160",
                destination: "> JB SENTRAL",
                destinationFont: "LECIP-10",
                scrolls: [
                    'JURONG TOWN HALL RD',
                    'BUKIT BATOK RD',
                    'CHOA CHU KANG RD',
                    'WOODLANDS RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "160",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "160",
                destination: "> JURONG TOWN HALL INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'WOODLANDS RD',
                    'CHOA CHU KANG RD',
                    'BUKIT BATOK RD',
                    'JURONG TOWN HALL RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "160",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "160A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "160A",
                destination: "BUKIT BATOK RD",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "160A",
                    terminateAt: "BT BATOK RD",
                    landmark: "(OPP DUNEARN SEC SCH)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "160A",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    "160B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "160",
                destination: "> MARSILING PARK",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "JURONG TOWN HALL RD",
                    "BUKIT BATOK RD",
                    "CHOA CHU KANG RD",
                    "WOODLANDS RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "160",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "160",
                destination: "> JURONG EAST INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "WOODLANDS RD",
                    "CHOA CHU KANG RD",
                    "BUKIT BATOK RD",
                    "JURONG TOWN HALL RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "160",
                font: "LECIP-20:9",
                spacing: 1
            }
        }
    },
    "160J": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "160",
                destination: "> JB SENTRAL",
                destinationFont: "LECIP-10",
                scrolls: [
                    'JURONG TOWN HALL RD',
                    'BUKIT BATOK RD',
                    'CHOA CHU KANG RD',
                    'WOODLANDS RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "160",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "160",
                destination: "> JURONG EAST INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'WOODLANDS RD',
                    'CHOA CHU KANG RD',
                    'BUKIT BATOK RD',
                    'JURONG TOWN HALL RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "160",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "160K": {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "160",
                branding: "KOTARAYA",
                font: "LECIP-20:9",
                spacing: 2,
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "160",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "160",
                branding: "JURONG EAST",
                font: "LECIP-20:9",
                spacing: 2,
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "160",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "160M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "160M",
                destination: "JURONG EAST INT-BT BATOK RD",
                destinationFont: "LECIP-6:3",
                scrolls: [
                    "BOON LAY WAY",
                    "JURONG TOWN HALL RD",
                    "BUKIT BATOK WEST AVE 8",
                    "BUKIT BATOK RD",
                    "JURONG TOWN HALL RD"
                ],
                scrollFont: "LECIP-6:3"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "160M",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    161: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "161",
                destination: "> WOODLANDS INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "HOUGANG AVE 8",
                    "HOUGANG AVE 4",
                    "SENGKANG EAST RD",
                    "SENGKANG EAST WAY",
                    "WOODLANDS AVE 2"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "161",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "161",
                destination: "> HOUGANG CTRL INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "WOODLANDS AVE 2",
                    "SENGKANG EAST WAY",
                    "SENGKANG EAST RD",
                    "HOUGANG AVE 4",
                    "HOUGANG AVE 8"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "161",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    162: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "162",
                destination: "YCK INT - SIN MING RD",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'ANG MO KIO AVE 8',
                    'BISHAN ST 22',
                    'SIN MING AVE',
                    'UPPER THOMSON RD',
                    'SHUNFU RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "162",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "162M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "162M",
                destination: "YCK INT-TEMASEK AVE",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'ANG MO KIO AVE 8',
                    'BISHAN ST 22',
                    'SIN MING AVE',
                    'THOMSON RD',
                    'ORCHARD RD',
                    'THOMSON RD',
                    'SING MIN AVE',
                    'BISHAN ST 22',
                    'ANG MO KIO AVE 8'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "162M",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    "162S": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "162",
                destination: "> SHENTON WAY TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "ANG MO KIO AVE 8",
                    "ANG MO KIO AVE 6",
                    "BISHAN ST 22",
                    "SIN MING AVE",
                    "UPPER THOMSON RD",
                    "THOMSON RD",
                    "ORCHARD RD",
                    "BRAS BASAH RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "162",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "162",
                destination: "> YIO CHU KANG INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "STAMFORD RD",
                    "ORCHARD TURN",
                    "THOMSON RD",
                    "UPPER THOMSON RD",
                    "SIN MING AVE",
                    "BISHAN ST 22",
                    "ANG MO KIO AVE 6",
                    "ANG MO KIO AVE 8"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "162",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    163: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "163",
                destination: "> SENGKANG INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "LOR 4 TOA PAYOH",
                    "BRADDELL RD",
                    "UPPER THOMSON RD",
                    "YIO CHU KANG RD",
                    "SENGKANG WEST AVE",
                    "SENGKANG EAST AVE"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "163",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "163",
                destination: "> TOA PAYOH INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "SENGKANG EAST AVE",
                    "SENGKANG WEST AVE",
                    "YIO CHU KANG RD",
                    "UPPER THOMSON RD",
                    "BRADDELL RD",
                    "LOR 4 TOA PAYOH"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "163",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "163A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "163A",
                destination: "FERNVALE LANE",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "163A",
                    terminateAt: "FERNVALE LN",
                    landmark: "(BEF SENGKANG WEST RD)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "163A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "163B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "163B",
                destination: "YIO CHU KANG RD",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                serviceNumber: "163B",
                landmark: "YIO CHU KANG RD (NCS HUB)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "163B",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    "163M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "163M",
                destination: "> SENGKANG W. AVE",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "PUNGGOL RD",
                    "SENGKANG EAST AVE",
                    "SENGKANG WEST AVE",
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "163M",
                font: "LECIP-20:6",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "163M",
                destination: "> SENGKANG INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "SENGKANG WEST AVE",
                    "SENGKANG EAST AVE",
                    "PUNGGOL RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "163M",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    165: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "165",
                destination: "> CLEMENTI INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'HOUGANG AVE 8',
                    'ANG MO KIO AVE 3',
                    'UPPER THOMSON RD',
                    "LORNIE RD",
                    'FARRER RD',
                    'HOLLAND RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "165",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "165",
                destination: "> HOUGANG CTRL INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'HOLLAND RD',
                    'FARRER RD',
                    'UPP THOMSON RD',
                    'ANG MO KIO AVE 3',
                    'HOUGANG AVE 8, 4',
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "165",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    166: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "166",
                destination: "> CLEMENTI INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'THOMSON RD',
                    'STH BRIDGE RD',
                    'TELOK BLANGAH RD',
                    'ALEXANDRA RD',
                    'DOVER RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "166",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "166",
                destination: "> ANG MO KIO INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "KAMPONG BAHRU RD",
                    "EU TONG SEN ST",
                    "UPPER THOMSON RD"
                    // 'DOVER RD',
                    // 'ALEXANDRA RD',
                    // 'TELOK BLANGAH RD',
                    // 'EU TONG SEN ST',
                    // 'THOMSON RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "166",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    168: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "168",
                destination: "> WOODLANDS INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "BEDOK NORTH AVE 3",
                    "TAMPINES AVE 4",
                    "TAMPINES AVE 10",
                    "JALAN KAYU",
                    "WOODLANDS AVE 2"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "168",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "168",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "WOODLANDS AVE 2",
                    "JALAN KAYU",
                    "TAMPINES AVE 10",
                    "TAMPINES AVE 4",
                    "BEDOK NORTH AVE 3"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "168",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "168A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "168A",
                destination: "TAMPINES STN",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "168A",
                    terminateAt: "TAMPINES",
                    landmark: "AVE 4 (OPP TAMPINES STN/INT)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "168A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    170: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "170",
                destination: "> LARKIN TER",
                destinationFont: "LECIP-10",
                scrolls: [
                    "BUKIT TIMAH RD",
                    "UPPER BUKIT TIMAH RD",
                    "WOODLANDS RD",
                    "WOODLANDS CTR RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "170",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "170",
                destination: "> QUEEN ST TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "WOODLANDS CTR RD",
                    "WOODLANDS RD",
                    "UPPER BUKIT TIMAH RD",
                    "DUNEARN RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "170",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "170A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "170A",
                destination: "WOODLANDS TRAIN CHECKPOINT",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "170A",
                    terminateAt: "W'LANDS CTR",
                    landmark: "RD (W'LANDS TRAIN CHECKPT)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "170A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "170X": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "170X",
                destination: "> JB SENTRAL",
                destinationFont: "LECIP-10",
                scrolls: [
                    "WOODLANDS RD",
                    "WOODLANDS CROSSING",
                    "JB SENTRAL"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "170X",
                font: "LECIP-20:6",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "170X",
                destination: "> KRANJI STN",
                destinationFont: "LECIP-10",
                scrolls: [
                    "JB SENTRAL",
                    "WOODLANDS CROSSING",
                    "WOODLANDS RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "170X",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "170Y": {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "170",
                branding: "LARKIN",
                font: "LECIP-20:12",
                spacing: 2,
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "170",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "170",
                branding: "QUEEN ST",
                font: "LECIP-20:12",
                spacing: 2,
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "170",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "170Z": {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "170X",
                branding: "JB SENTRAL",
                font: "LECIP-20:9",
                spacing: 2,
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "170X",
                font: "LECIP-20:6",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "170X",
                branding: "KRANJI STN",
                font: "LECIP-20:9",
                spacing: 2,
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "170X",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    174: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "174",
                destination: "> KAMPONG BAHRU TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "BT BATOK E. AVE 3, 6",
                    "JLN JURONG KECHIL",
                    "DUNEARN RD",
                    "FARRER RD",
                    "HOLLAND RD",
                    "ORCHARD RD",
                    "NTH, STH BRIDGE RD",
                    "NTH BRIDGE RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "174",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "174",
                destination: "> BOON LAY INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "EU TONG SEN ST",
                    "ORCHARD BLVD",
                    "HOLLAND RD",
                    "FARRER RD",
                    "BT TIMAH RD",
                    "JLN JURONG KECHIL",
                    "BT BATOK E. AVE 6, 3"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "174",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "174E": {
        1: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "174e",
                image: "express",
                destination: "EXPRESS 174e"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "174e",
                font: "LECIP-20:6",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "174e",
                image: "fastForward",
                destination: "FFW 174e"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "174e",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    175: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "175",
                destination: "> LOR 1 GEYLANG TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "WEST COAST HIGHWAY",
                    "PASIR PANJANG RD",
                    "ALEXANDRA RD",
                    "JALAN BUKIT MERAH",
                    "ORCHARD RD",
                    "BRAS BASAH RD",
                    "KALLANG BAHRU"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "175",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "175",
                destination: "> CLEMENTI INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'KALLANG BAHRU',
                    'STAMFORD RD',
                    'ORCHARD BOULEVARD',
                    'JALAN BUKIT MERAH',
                    'ALEXANDRA RD',
                    'PASIR PANJANG RD',
                    'WEST COAST HIGHWAY'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "175",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    179: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "179",
                destination: "BOON LAY INT-NTU",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "JURONG WEST ST 63",
                    "PIONEER RD NORTH",
                    "LIEN YING CHOW DR",
                    "NANYANG DR"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "179",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "179A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "179A",
                destination: "BOON LAY INT-NANYANG DR",
                destinationFont: "LECIP-6:3",
                scrolls: [
                    "NANYANG DR",
                    "PIONEER RD NTH"
                ],
                scrollFont: "LECIP-6:3"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "179A",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    181: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "181",
                destination: "BOON LAY INT-JURONG W.",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "JURONG WEST ST 64",
                    "JURONG WEST ST 75",
                    'JURONG WEST AVE 5',
                    'JURONG WEST AVE 3'
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "181",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "181M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "181M",
                destination: "BOON LAY INT-JUR W. ST 23",
                destinationFont: "LECIP-6:3",
                scrolls: [
                    "JURONG WEST ST 64",
                    "JURONG WEST ST 75",
                    "JURONG WEST AVE 5",
                    "JURONG WEST AVE 3",
                    "JURONG WEST ST 64",
                    "JURONG WEST ST 75",
                    "JURONG WEST AVE 5",
                    "JURONG WEST AVE 3"
                ],
                scrollFont: "LECIP-6:3"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "181M",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    182: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "182",
                destination: "> TUAS SOUTH AVE 9",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TUAS STH AVE 3",
                    "JALAN AHMAD IBRAHIM",
                    "TUAS STH AVE 3",
                    "TUAS STH AVE 9"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "182",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "182",
                destination: "> JOO KOON INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "TUAS STH AVE 3",
                    "JALAN AHMAD IBRAHIM",
                    "TUAS STH AVE 3",
                    "TUAS STH AVE 9"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "182",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "182M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "182M",
                destination: "JOO KOON INT-TUAS STH",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'TUAS STH AVE 3',
                    "JALAN AHMAD IBRAHIM",
                    'TUAS STH AVE 3',
                    'TUAS STH AVE 9',
                    'TUAS STH AVE 5'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "182M",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    183: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "183",
                destination: "> SCIENCE PARK RD",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TOH GUAN RD",
                    "TOH GUAN RD EAST",
                    "COMMONWEALTH AVE WEST",
                    "CLEMENTI RD",
                    "PASIR PANJANG RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "183",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "183",
                destination: "> JURONG EAST",
                destinationFont: "LECIP-10",
                scrolls: [
                    "PASIR PANJANG RD",
                    "CLEMENTI RD",
                    "COMMONWEALTH AVE WEST",
                    "TOH GUAN RD EAST",
                    "TOH GUAN RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "183",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "183A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "183A",
                destination: "CLEMENTI STN",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "183A",
                    terminateAt: "C'WEALTH AVE",
                    landmark: "WEST (CLEMENTI STN EXIT A)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "183A",
                font: "LECIP-20:6",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "183A",
                destination: "> CLEMENTI STN",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'JURONG E. VIA SCI PK'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "183A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "183B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "183A",
                destination: "TOH TUCK AVE",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "183B",
                    terminateAt: "TOH TUCK AVE",
                    landmark: "(ULU PANDAN R.I PLANT)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "183B",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    185: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "185",
                destination: "> BUONA VISTA TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'PIONEER RD NTH',
                    'JURONG WEST AVE 5, 3',
                    'JURONG EAST AVE 1',
                    'CLEMENTI AVE 6',
                    "C'WEALTH AVE WEST"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "185",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "185",
                destination: "> SOON LEE DEPOT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "C'WEALTH AVE WEST",
                    'CLEMENTI AVE 6',
                    'JURONG EAST AVE 1',
                    'JURONG WEST AVE 5, 3',
                    'PIONEER RD NTH'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "185",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    186: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "186",
                destination: "> SHENTON WAY TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "BALESTIER RD",
                    "FARRER RD",
                    "QUEENSWAY",
                    "ALEXANDRA RD",
                    "HAVELOCK RD",
                    "UPPER PICKERING ST"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "186",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "186",
                destination: "> ST.MICHAEL'S TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "UPPER PICKERING ST",
                    "HAVELOCK RD",
                    "ALEXANDRA RD",
                    "QUEENSWAY",
                    "FARRER RD",
                    "BALESTIER RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "186",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    191: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "191",
                destination: "BUONA VISTA TER-PORTSDOWN RD",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    'COMMONWEALTH AVE',
                    'NORTH BUONA VISTA RD',
                    'PORTSDOWN RD'
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "191",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    192: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "192",
                destination: "> TUAS TER",
                destinationFont: "LECIP-10",
                scrolls: [
                    "JURONG WEST ST 62",
                    "TUAS AVE 1",
                    'JALAN AHMAD IBRAHIM',
                    "TUAS AVE 12",
                    "PIONEER RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "192",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "192",
                destination: "> BOON LAY INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "PIONEER RD",
                    "TUAS AVE 1",
                    "JALAN AHMAD IBRAHIM",
                    "UPP JURONG RD",
                    "JURONG WEST ST 62"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "192",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
    },
    193: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "193",
                destination: "> TUAS TER",
                destinationFont: "LECIP-10",
                scrolls: [
                    "JURONG WEST AVE 4",
                    "LOK YANG WAY",
                    "TUAS RD",
                    "TUAS AVE 5, 9",
                    "TUAS WEST DR"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "193",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "193",
                destination: "> BOON LAY INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "TUAS WEST DR",
                    "TUAS AVE 9, 5",
                    "TUAS RD",
                    "LOK YANG WAY",
                    "JURONG WEST AVE 4"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "193",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
    },
    194: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "194",
                destination: "BOON LAY INT-JALAN AHMAD IBRAHIM",
                destinationFont: "LECIP-6:3",
                scrolls: [
                    "JALAN AHMAD IBRAHIM"
                ],
                scrollFont: "LECIP-6:3"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "194",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    195: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "195",
                destination: "MARINA CTR TER-C'WEALTH",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'RIVER VALLEY RD',
                    'TIONG BAHRU RD',
                    'LOWER DELTA RD',
                    'TELOK BLANGAH WAY',
                    'ALEXANDRA RD',
                    'COMMONWEALTH DR'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "195",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "195A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "195A",
                destination: "TIONG BAHRU RD",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "195A",
                    landmark: "T. BAHRU RD (T. BAHRU PLAZA)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "195A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "195B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "195B",
                destination: "COMMONWEALTH STN",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "195B",
                    terminateAt: "C'WEALTH AVE",
                    landmark: "(C'WEALTH STN EXIT B/C)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "195B",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    196: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "196",
                destination: "> CLEMENTI INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "MOUNTBATTEN RD",
                    "NICOLL HIGHWAY",
                    "JALAN BUKIT MERAH"
                    // 'BEDOK STH AVE 1',
                    // 'MARINE PARADE RD',
                    // 'MOUNTBATTEN RD',
                    // 'SHENTON WAY',
                    // 'JLN BUKIT MERAH',
                    // 'QUEENSWAY',
                    // 'DOVER RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "196",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "196",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'DOVER RD',
                    'JLN BUKIT MERAH',
                    'QUEENSWAY',
                    'ROBINSON RD',
                    'MOUNTBATTEN RD',
                    'MARINE PARADE RD',
                    'BEDOK STH AVE 1'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "196",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "196A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "196A",
                destination: "SHENTON WAY",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "196A",
                    landmark: "SHENTON WAY (OPP MAS BLDG)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "196A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "196E": {
        1: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "196e",
                image: "express",
                destination: "EXPRESS 196e"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "196e",
                font: "LECIP-20:6",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "196e",
                image: "fastForward",
                destination: "FFW 196e"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "196e",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    197: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "197",
                destination: "> JURONG EAST INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'BEDOK SOUTH AVE 1',
                    'MARINE PARADE RD',
                    'NTH, STH BRIDGE RD',
                    'JALAN BUKIT MERAH',
                    'JURONG TOWN HALL RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "197",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "197",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'JURONG TOWN HALL RD',
                    'JALAN BUKIT MERAH',
                    'EU TONG SEN ST',
                    'MARINE PARADE RD',
                    'BEDOK SOUTH AVE 1'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "197",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    198: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "198",
                destination: "> BUKIT MERAH INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'BOON LAY AVE',
                    'JURONG WEST AVE 1',
                    'JURONG EAST AVE 1',
                    'JURONG TOWN HALL RD',
                    'AYE',
                    'QUEENSWAY'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "198",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "198",
                destination: "> BOON LAY INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "QUEENSWAY",
                    "AYE",
                    "JURONG TOWN HALL RD",
                    "JURONG EAST AVE 1",
                    "JURONG WEST AVE 1",
                    "BOON LAY AVE"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "198",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "198A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "198A",
                destination: "JURONG EAST AVE 1",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "198A",
                    landmark: "JUR E. AVE 1 (OPP PARC OASIS)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "198A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    199: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "199",
                destination: "BOON LAY INT-NANYANG CRES",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    'JALAN BAHAR',
                    'NANYANG AVE',
                    'NANYANG CRES',
                    'NANYANG DR'
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "199",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    200: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "200",
                destination: "> KENT RIDGE TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'HOLLAND DR',
                    'COMMONWEALTH AVE',
                    'NTH BUONA VISTA RD',
                    'STH BUONA VISTA RD',
                    "PASIR PANJANG RD",
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "200",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "200",
                destination: "> BUONA VISTA TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'PASIR PANJANG RD',
                    'STH BUONA VISTA RD',
                    'NTH BUONA VISTA RD',
                    'COMMONWEALTH AVE',
                    'HOLLAND DR'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "200",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "200A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "200A",
                destination: "KENT RIDGE TER",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "200A",
                    terminateAt: "CLEMENTI RD",
                    landmark: "(KENT RIDGE TER)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "200A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    201: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "201",
                destination: "KENT RIDGE TER-PANDAN GDNS",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "WEST COAST RD",
                    "C'WEALTH AVE WEST",
                    "TEBAN GARDENS RD",
                    "PANDAN GARDENS",
                    "C'WEALTH AVE WEST",
                    "WEST COAST RD",
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "201",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    222: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "222",
                destination: "BEDOK INT-CHAI CHEE DR",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'BEDOK NORTH ST 1',
                    'BEDOK NORTH AVE 3',
                    'BEDOK NORTH RD',
                    'CHAI CHEE RD',
                    'CHAI CHEE ST'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "222",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "222A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "222A",
                destination: "BEDOK STN",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "222A",
                    terminateAt: "NEW UPP",
                    landmark: "CHANGI RD (BEDOK STN EXIT A)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "222A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "222B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "222B",
                destination: "BEDOK STN",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "222B",
                    terminateAt: "NEW UPP",
                    landmark: "CHANGI RD (BEDOK STN EXIT B)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "222B",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "222C": {
        1: {
            front: {
                renderType: "ChingaystandardService",
                serviceNumber: "222",
                destination: "BEDOK INT-CHAI CHEE DR",
                destinationFont: "Hanover-8",
                scrolls: [
                    {
                        renderType: "destScroll",
                        top: "~",
                        topFont: "LECIP-20:12",
                                    
                        serviceNumber: "222"
                    },
                    'BEDOK NORTH ST 1',
                    'BEDOK NORTH AVE 3',
                    'BEDOK NORTH RD',
                    'CHAI CHEE RD',
                    'CHAI CHEE ST'
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "222",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "225G": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "225G",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'BEDOK NORTH AVE 1',
                    'BEDOK NORTH ST 3',
                    'BEDOK NORTH AVE 2'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "225G",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    "225W": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "225W",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'BEDOK NORTH AVE 2',
                    'BEDOK NORTH ST 3',
                    'BEDOK NORTH AVE 1',
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "225W",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    228: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "228",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "BEDOK NORTH ST 1",
                    "BEDOK NORTH AVE 3",
                    "BEDOK RESERVOIR RD",
                    "BEDOK NORTH AVE 3"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "228",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    229: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "229",
                destination: "> BEDOK INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'CHAI CHEE RD',
                    'BEDOK SOUTH RD',
                    'BEDOK SOUTH AVE 3',
                    'UPP EAST COAST RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "229",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    230: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "230",
                destination: "> CALDECOTT STN",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TOA PAYOH RISE",
                    "LOR 6 TOA PAYOH",
                    "LOR 8, 7 TOA PAYOH",
                    "LOR 6 TOA PAYOH",
                    "TOA PAYOH RISE",
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "230",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "230M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "230M",
                destination: "TOA PAYOH INT - KIM KEAT AVE (LOOP)",
                destinationFont: "LECIP-6:3",
                scrolls: [
                {
                    renderType: "centreMessageServiceScroll",

                    top: "TOA PAYOH INT - ",
                    topFont: "LECIP-7:5",

                    bottom: "KIM KEAT AVE (LOOP)",
                    bottomFont: "LECIP-7:5",

                    serviceNumber: "230M",
                },  
                ],
                scrollFont: "LECIP-6:3"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "230M",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "230T": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "230",
                destination: "> TOA PAYOH INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'LOR 6 TOA PAYOH',
                    'TOA PAYOH EAST',
                    'KIM KEAT AVE',
                    'TOA PAYOH EAST'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "230",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    231: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "231",
                destination: "> TOA PAYOH INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'LOR 1 TOA PAYOH',
                    'LOR 4 TOA PAYOH',
                    'LOR 5 TOA PAYOH'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "231",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "231G": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "231G",
                destination: "> TOA PAYOH",
                destinationFont: "LECIP-10",
                scrolls: [
                    "LOR 4 TOA PAYOH",
                    "LOR 1 TOA PAYOH"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "231G",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    "231W": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "231W",
                destination: "> TOA PAYOH",
                destinationFont: "LECIP-10",
                scrolls: [
                    "LOR 1 TOA PAYOH",
                    "LOR 4 TOA PAYOH"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "231W",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    232: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "232",
                destination: "> TOA PAYOH INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'LOR 6 TOA PAYOH',
                    'LOR 4 TOA PAYOH',
                    'LOR 2 TOA PAYOH',
                    'LOR 1 TOA PAYOH',
                    'LOR 7 TOA PAYOH'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "232",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    235: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "235",
                destination: "> TOA PAYOH INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'LOR 6 TOA PAYOH',
                    'TOA PAYOH EAST',
                    'LOR 5, 3, 2, 1 TOA PAYOH',
                    'TOA PAYOH RISE'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "235",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    238: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "238",
                destination: "> TOA PAYOH INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'LOR 6 TOA PAYOH',
                    'LOR 8 TOA PAYOH'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "238",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    240: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "240",
                destination: "> BOON LAY INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "JALAN AHMAD IBRAHIM",
                    "KANG CHING RD",
                    "YUAN CHING RD",
                    "BOON LAY PLACE",
                    "BOON LAY WAY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "240",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "240A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "240A",
                destination: "LAKESIDE STN",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "240A",
                    landmark: "BOON LAY WAY (LAKESIDE STN)",
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "240A",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
        "222A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "222A",
                destination: "BEDOK STN",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "222A",
                    terminateAt: "NEW UPP",
                    landmark: "CHANGI RD (BEDOK STN EXIT A)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "222A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "240M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "240M",
                destination: "BOON LAY WY-JUR W.64",
                destinationFont: "LECIP-6:3",
                scrolls: [
                    "BOON LAY PLACE",
                    "BOON LAY DR",
                    "JURONG WEST ST 64",
                    "BOON LAY DR"
                ],
                scrollFont: "LECIP-6:3"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "240M",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    241: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "241",
                destination: "> BOON LAY INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "JURONG WEST ST 63",
                    "PIONEER RD NORTH",
                    "JURONG WEST ST 91"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "241",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "241A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "241A",
                destination: "PIONEER STN",
                destinationFont: "LECIP-10",
                scrolls: [{
                    renderType: "swt",
                    serviceNumber: "241A",
                    terminateAt: "JURONG W. ST 63",
                    landmark: "(PIONEER STN EXIT B)",
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "241A",
                font: "LECIP-20:6",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "241A",
                destination: "JURONG WEST ST 63",
                destinationFont: "LECIP-10",
                scrolls: [{
                     renderType: "swt",
                     serviceNumber: "241A",
                     landmark: "JURONG W. ST 63 (BLK 649A)"
                },
                ],
                scrollFont: "LECIP-7:5"
           },
            rear: {
                renderType: "rearService",
                serviceNumber: "241A",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    242: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "242",
                destination: "> BOON LAY INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "JURONG WEST CENTRAL 1",
                    "JALAN BOON LAY",
                    "JURONG WEST AVE 4",
                    "JURONG WEST ST 72",
                    "JURONG WEST AVE 5",
                    "JURONG WEST AVE 4",
                    "JALAN BOON LAY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "242",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "243G": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "243G",
                destination: "> BOON LAY INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "JURONG WEST ST 64",
                    "JURONG WEST ST 75",
                    "JURONG WEST ST 81",
                    "JURONG WEST AVE 5",
                    "JURONG WEST AVE 4",
                    "JURONG WEST ST 62"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "243G",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    "243W": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "243W",
                destination: "> BOON LAY INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "JURONG WEST ST 62",
                    "JURONG WEST AVE 4",
                    "JURONG WEST AVE 5",
                    "JURONG WEST ST 81",
                    "JURONG WEST ST 75",
                    "JURONG WEST ST 64"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "243W",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    246: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "246",
                destination: "> BOON LAY INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'CHIN BEE DR',
                    'TAH CHING RD',
                    'BOON LAY DR',
                    "YUAN CHING RD",
                    'JALAN TUKANG'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "246",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    247: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "247",
                destination: "TUAS TER-TUAS BAY LINK",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "TUAS LINK 4",
                    "TUAS AVE 7",
                    "TUAS CRES",
                    "TUAS STH AVE 5, 4, 7",
                    "TUAS STH AVE 3, 9, 8",
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "247",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    248: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "248",
                destination: "TUAS TER-TUAS STH AVE 14",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "PIONEER RD",
                    "TUAS AVE 20",
                    "TUAS STH AVE 5",
                    "TUAS STH AVE 9",
                    "TUAS STH AVE 10"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "248",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "248M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "248M",
                destination: "TUAS TER-TUAS STH WAY",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "PIONEER RD",
                    "TUAS AVE 20",
                    "TUAS STH AVE 5",
                    "TUAS STH AVE 14",
                    "TUAS SOUTH WAY",
                    "TUAS STH AVE 9",
                    "TUAS STH AVE 10",
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "248M",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    249: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "249",
                destination: "> BOON LAY INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "JALAN BOON LAY",
                    "JURONG PIER RD",
                    "TANJONG KLING RD",
                    "SHIPYARD RD",
                    "JALAN SAMULUN",
                    "SHIPYARD RD",
                    "TANJONG KLING RD",
                    "JURONG PIER RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "249",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    251: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "251",
                destination: "BOON LAY INT-SHIPYARD RD",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "BOON LAY WAY",
                    "PIONEER RD NTH",
                    "SHIPYARD RD",
                    "PIONEER RD NTH"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "251",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    252: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "252",
                destination: "> BOON LAY INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "INTERNATIONAL RD",
                    "JOO KOON CIRCLE",
                    "JOO KOON RD",
                    "JOO KOON WAY",
                    "JOO KOON RD",
                    "JOO KOON CIRCLE",
                    "INTERNATIONAL RD",
                    "ENTERPRISE RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "252",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    253: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "253",
                destination: "JOO KOON INT-BENOI RD",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "PIONEER RD",
                    "BENOI RD",
                    "PIONEER RD",
                    "BENOI SECTOR"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "253",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    254: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "254",
                destination: "JOO KOON INT-TUAS AVE 11",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "TUAS RD",
                    "TUAS BASIN LINK",
                    "BENOI RD",
                    "PIONEER RD"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "254",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    255: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "255",
                destination: "JOO KOON INT-GUL CRES",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "GUL AVE",
                    "GUL CIRCLE",
                    "GUL CRES"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "255",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    256: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "256",
                destination: "BOON LAY INT-JOO KOON",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "JURONG WEST ST 62",
                    "PIONEER RD NTH",
                    "JOO KOON CIRCLE",
                    "PIONEER RD NTH",
                    "JURONG WEST ST 62",
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "256",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    257: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "257",
                destination: "JOO KOON INT-PIONEER SEC 2",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "PIONEER SECT. 2",
                    "PIONEER SECT. 1",
                    "BENOI RD",
                    "GUL RD"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "257",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    258: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "258",
                destination: "JOO KOON INT-JUR W. ST 64",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "PIONEER RD NTH",
                    "JURONG WEST ST 61, 81, 75",
                    "JALAN AHMAD IBRAHIM"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "258",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    261: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "261",
                destination: "> ANG MO KIO INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'ANG MO KIO AVE 3',
                    'ANG MO KIO AVE 10',
                    'INDUSTRIAL PARK 1'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "261",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    262: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "262",
                destination: "> ANG MO KIO INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'ANG MO KIO AVE 8',
                    'ANG MO KIO AVE 1',
                    'ANG MO KIO ST 11',
                    'ANG MO KIO AVE 2'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "262",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    265: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "265",
                destination: "AMK-AMK AVE 10",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'ANG MO KIO AVE 9',
                    'ANG MO KIO AVE 4',
                    'ANG MO KIO AVE 3'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "265",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "265A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "265A",
                destination: "ANG MO KIO INT",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "265A",
                    landmark: "ANG MO KIO AVE 8 (AMK INT)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "265A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "265C": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "265",
                destination: "AMK-AMK AVE 10",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    {
                        renderType: "destScroll",
                        top: "~",
                        topFont: "LECIP-20:12",
                                    
                        serviceNumber: "265"
                    },
                    'ANG MO KIO AVE 9',
                    'ANG MO KIO AVE 4',
                    'ANG MO KIO AVE 3'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "265",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    268: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "268",
                destination: "> ANG MO KIO AVE 5",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'ANG MO KIO AVE 3',
                    'ANG MO KIO AVE 4',
                    'ANG MO KIO AVE 5'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "268",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "268A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "268A",
                destination: "ANG MO KIO AVE 5",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "268A",
                    terminateAt: "ANG MO KIO",
                    landmark: "AVE 5 (TECHPLACE 2)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "268A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "268B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "268B",
                destination: "ANG MO KIO STN",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "268B",
                    terminateAt: "ANG MO KIO",
                    landmark: "AVE 3 (AMK STN)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "268B",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "268C": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "268C",
                destination: "ANG MO KIO AVE 9",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "268C",
                    terminateAt: "ANG MO KIO",
                    landmark: "AVE 9 (AMK POLICE DIV HQ)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "268C",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    269: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "269",
                destination: "> ANG MO KIO INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'ANG MO KIO AVE 3',
                    'ANG MO KIO AVE 4',
                    'ANG MO KIO AVE 5',
                    'ANG MO KIO ST 61',
                    'YIO CHU KANG RD',
                    'ANG MO KIO AVE 5',
                    'ANG MO KIO AVE 4',
                    'ANG MO KIO AVE 3'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "269",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "269A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "269A",
                destination: "ANG MO KIO ST 61",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "269A",
                    terminateAt: "ANG MO KIO",
                    landmark: "ST 61 (AMK MK/FC)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "269A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    272: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "272",
                destination: "> BUKIT MERAH INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "HENDERSON RD",
                    "TELOK BLANGAH WAY",
                    "TELOK BLANGAH RISE",
                    "TELOK BLANGAH CRES",
                    "HENDERSON RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "272",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    273: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "273",
                destination: "> BUKIT MERAH INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "HENDERSON RD",
                    "TELOK BLANGAH HTS",
                    "TELOK BLANGAH ST 32",
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "273",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    274: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "274",
                destination: "> BUKIT MERAH",
                destinationFont: "LECIP-10",
                scrolls: [
                    "DEPOT RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "274",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    275: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "275",
                destination: "> BUKIT MERAH",
                destinationFont: "LECIP-10",
                scrolls: [
                    "JALAN BUKIT MERAH",
                    "LOWER DELTA RD",
                    "BUKIT PURMEI AVE",
                    "LOWER DELTA RD",
                    "JALAN BUKIT MERAH"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "275",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    282: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "282",
                destination: "> CLEMENTI",
                destinationFont: "LECIP-10",
                scrolls: [
                    "CLEMENTI AVE 5",
                    "CLEMENTI AVE 2",
                    "CLEMENTI WEST ST 2"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "282",
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
                destination: "> CLEMENTI",
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
    285: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "285",
                destination: "> CLEMENTI",
                destinationFont: "LECIP-10",
                scrolls: [
                    "CLEMENTI AVE 2",
                    "WEST COAST RD",
                    "PANDAN LOOP"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "285",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    291: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "291",
                destination: "> TAMPINES ST 83 & 33",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TAMPINES AVE 5",
                    "TAMPINES ST 83",
                    "TAMPINES ST 81",
                    "TAMPINES ST 21",
                    "TAMPINES ST 32",
                    "TAMPINES ST 21"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "291",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "291T": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "291T",
                destination: "> TAMPINES ST 83 & 33",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TAMPINES AVE 5",
                    "TAMPINES ST 83",
                    "TAMPINES ST 81",
                    "TAMPINES ST 21",
                    "TAMPINES ST 32",
                    "TAMPINES ST 21"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "291T",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    292: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "292",
                destination: "> TAMPINES INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "TAMPINES AVE 5",
                    "TAMPINES AVE 2",
                    "TAMPINES ST 22",
                    "TAMPINES AVE 2",
                    "TAMPINES ST 11"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "292",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    293: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "293",
                destination: "> TAMPINES ST 71&AVE 7",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TAMPINES AVE 4 & 3",
                    "TAMPINES AVE 8 & 9",
                    "TAMPINES ST 45&42",
                    "TAMPINES AVE 4 & 3"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "293",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "293C": {
        1: {
            front: {
                renderType: "ChingaystandardService",
                serviceNumber: "293",
                destination: "> TAMPINES ST 71&AVE 7",
                destinationFont: "Hanover-8",
                scrolls: [
                    {
                        renderType: "destScroll",
                        top: "~",
                        topFont: "LECIP-20:12",
                                    
                        serviceNumber: "293"
                    },
                    "TAMPINES AVE 4 & 3",
                    "TAMPINES AVE 8 & 9",
                    "TAMPINES ST 45 & 42",
                    "TAMPINES AVE 4 & 3",
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "293",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "293T": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "293T",
                destination: "> TAMP ST 71&AVE 7",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TAMPINES ST 45 & 42",
                    "TAMPINES AVE 4 & 3",
                    "TAMPINES AVE 8 & 9"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "293T",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    296: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "296",
                destination: "TAMPINES INT-TAMPINES NTH DR 2",
                destinationFont: "LECIP-6:3",
                scrolls: [
                    "TAMPINES AVE 5",
                    "TAMPINES AVE 6",
                    "TAMPINES NORTH DR 1",
                    "TAMPINES ST 64"
                ],
                scrollFont: "LECIP-6:3"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "296",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    298: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "298",
                destination: "TAMP NORTH INT - TAMP AVE 5",
                destinationFont: "LECIP-6:3",
                scrolls: [
                    "TAMPINES ST 62",
                    "TAMPINES NORTH DR 2",
                    "TAMPINES CONCOURSE",
                    "TAMPINES AVE 4",
                    "TAMPINES AVE 3"
                ],
                scrollFont: "LECIP-6:3"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "298",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "298X": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "298X",
                destination: "TAMP NTH INT - TAMP ST 86 (LOOP)",
                destinationFont: "LECIP-6:3",
                scrolls: [
                    {
                        renderType: 'twoline3',

                        serviceNumber: "298X",

                        top: "TAMPINES ST 62",
                        topFont: "LECIP-7:5",
                        spacingTop: "2",
        
                        bottom: "TAMP NTH INtAMP ST 86(LOOP)",
                        bottomFont: "LECIP-9:3",
                        marginBottom: "-1"
                    },
                    {
                        renderType: 'twoline3',

                        serviceNumber: "298X",

                        top: "TAMPINES CTRL 1",
                        topFont: "LECIP-7:5",
                        spacingTop: "2",
        
                        bottom: "TAMP NTH INtAMP ST 86(LOOP)",
                        bottomFont: "LECIP-9:3",
                        marginBottom: "-1"
                    },
                    {
                        renderType: 'twoline3',

                        serviceNumber: "298X",

                        top: "TAMPINES ST 86",
                        topFont: "LECIP-7:5",
                        spacingTop: "2",
        
                        bottom: "TAMP NTH INtAMP ST 86(LOOP)",
                        bottomFont: "LECIP-9:3",
                        marginBottom: "-1"
                    },
                    {
                        renderType: 'twoline3',

                        serviceNumber: "298X",

                        top: "TAMPINES AVE 4",
                        topFont: "LECIP-7:5",
                        spacingTop: "2",
        
                        bottom: "TAMP NTH INtAMP ST 86(LOOP)",
                        bottomFont: "LECIP-9:3",
                        marginBottom: "-1"
                    },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "298X",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "298T": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "298",
                destination: "TAMP CONCOURSE INT - TAMP ST 86",
                destinationFont: "LECIP-6:3",
                scrolls: [
                    "TAMPINES CENTRAL 1",
                    "TAMPINES AVE 4",
                    "TAMPINES AVE 3"
                ],
                scrollFont: "LECIP-6:3"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "298",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    299: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "299",
                destination: "TAMPINES NORTH INT - TAMPINES ST 96",
                destinationFont: "LECIP-6:4",
                scrolls: [
                {
                    renderType: "centreMessageServiceScroll",

                    top: "TAMPINES NORTH INT -",
                    topFont: "LECIP-7:5",

                    bottom: "TAMPINES ST 96 (LOOP)",
                    bottomFont: "LECIP-7:5",

                    serviceNumber: "299",
                },  
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "299",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    315: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "315",
                destination: "> SERANGOON NTH AVE 5",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    {
                        renderType: "destScroll",
                        top: "S'GOON  NTH  AVE  5",
                        topFont: "LECIP-14:6",
                
                        serviceNumber: "315"
                    },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: 'twoline2',
                top: "3 1 5",
                topFont: "LECIP-13:9",
                spacingTop: "2",
                

                bottom: "SGN NTH",
                bottomFont: "LECIP-6:3",
                marginBottom: "0"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "315",
                destination: "> SERANGOON INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    {
                        renderType: "destScroll",
                        top: "SERANGOON  INT",
                        topFont: "LECIP-14:6",
                
                        serviceNumber: "315"
                    },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: 'twoline2',
                top: "3 1 5",
                topFont: "LECIP-13:9",
                spacingTop: "2",
                

                bottom: "SGN INT",
                bottomFont: "LECIP-6:3",
                marginBottom: "0"
            }
        }
    },
    "315X": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "315",
                destination: "> SERANGOON NTH AVE 5",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'LORONG CHUAN',
                    'SERANGOON GARDEN WAY',
                    'SERANGOON NORTH AVE 1',
                    'SERANGOON NORTH AVE 4',
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "315",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "315",
                destination: "> SERANGOON INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'ANG MO KIO AVE 3',
                    'SERANGOON NORTH 1',
                    'SERANGOON GARDEN WAY',
                    'LORONG CHUAN'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "315",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    317: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "317",
                destination: "> BERWICK DRIVE",
                destinationFont: "LECIP-10",
                scrolls: [
                    {
                        renderType: "destScroll",
                        top: "BERWICK  DRIVE",
                        topFont: "LECIP-14:6",
                
                        serviceNumber: "317"
                    },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: 'twoline2',
                top: "3 1 7",
                topFont: "LECIP-12:8",
                spacingTop: "2",
                

                bottom: "BERWICK",
                bottomFont: "LECIP-6:3",
                marginBottom: "-1"
                
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "317",
                destination: "> SERANGOON INT",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "destScroll",
                    top: "SERANGOON  INT",
                    topFont: "LECIP-14:6",
            
                    serviceNumber: "317"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: 'twoline2',
                top: "3 1 7",
                topFont: "LECIP-12:8",
                spacingTop: "2",
                

                bottom: "SGN INT",
                bottomFont: "LECIP-6:3",
                marginBottom: "-1"
            }
        }
    },
    "317X": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "317",
                destination: "> BERWICK DR 5",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'UPP SERANGOON RD',
                    'YIO CHU KANG LINK',
                    'SERANGOON GARDEN WAY',
                    'CHARTWELL DR',
                    'BURGHLEY DR'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "317",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "317",
                destination: "> SERANGOON INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'TAVISTOCK AVE',
                    'HEMSLEY AVE',
                    'KENSINGTON PARK RD',
                    'SERANGOON GARDEN WAY',
                    'YIO CHU KANG LINK',
                    'UPP SERANGOON RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "317",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    324: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "324",
                destination: "> HOUGANG CTRL INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'UPP SERANGOON RD',
                    'UPP SERANGOON CRES',
                    'UPP SERANGOON VIEW',
                    'UPP SERANGOON RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "324",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    325: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "325",
                destination: "> HOUGANG AVE 9",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'UPP SERANGOON RD',
                    'HOUGANG AVE 2, 10, 8',
                    'HOUGANG ST 51',
                    'BUANGKOK GREEN'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "325",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    329: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "329",
                destination: "HOUGANG CTRL INT-BUANGKOK CRES",
                destinationFont: "LECIP-6:3",
                scrolls: [
                    "HOUGANG AVE 4,9",
                    "HOUGANG ST 91,93",
                    "BUANGKOK LINK"
                ],
                scrollFont: "LECIP-6:3"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "329",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    333: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "333",
                destination: "> JURONG EAST",
                destinationFont: "LECIP-10",
                scrolls: [
                    "TOH GUAN RD",
                    "JURONG EAST AVE 1",
                    "JURONG EAST ST 32",
                    "JURONG EAST AVE 1",
                    "TOH GUAN RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "333",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },    
    334: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "334",
                destination: "> JURONG EAST",
                destinationFont: "LECIP-10",
                scrolls: [
                    "JURONG EAST AVE 1",
                    "JURONG WEST AVE 1",
                    "JURONG WEST ST 42"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "334",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    335: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "335",
                destination: "> JURONG EAST",
                destinationFont: "LECIP-10",
                scrolls: [
                    "JURONG TOWN HALL RD",
                    "BOON LAY WAY",
                    "JURONG WEST ST 52",
                    "JURONG WEST AVE 1",
                    "JURONG WEST ST 41",
                    "BOON LAY WAY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "335",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },    
    354: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "354",
                destination: "> JLN LOYANG BESAR",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "PASIR RIS DR 3",
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "354",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    358: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "358",
                destination: "> PASIR RIS DR 10 & ST 41",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "PASIR RIS DR 3",
                    "PASIR RIS DR 1",
                    "ELIAS RD",
                    "PASIR RIS DR 6",
                    "PASIR RIS DR 4",
                    "PASIR RIS ST 41"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "358",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    359: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "359",
                destination: "> PASIR RIS ST 71 & ST 11",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "PASIR RIS DR 3",
                    "PASIR RIS DR 12",
                    "PASIR RIS DR 10",
                    "PASIR RIS DR 12",
                    "PASIR RIS DR 3",
                    "PASIR RIS ST 51",
                    "LOYANG AVE",
                    "PASIR RIS DR 2",
                    "PASIR RIS ST 51"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "359",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    371: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "371",
                destination: "> SENGKANG INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "COMPASSVALE RD",
                    "RIVERVALE DR",
                    "RIVERVALE CRES",
                    "COMPASSVALE ST"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "371",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    372: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "372",
                destination: "> SENGKANG INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    'SENGKANG EAST WAY',
                    'ANCHORVALE DR',
                    'PUNGGOL DR',
                    'COMPASSVALE RD',
                    'ANCHORVALE RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "372",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "374C": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "374",
                destination: "> COMPASSVALE INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "SENGKANG EAST WAY",
                    "ANCHORVALE CRES",
                    "COMPASSVALE RD",
                    "SENGKANG EAST WAY",
                    "FERNVALE RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "374",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    374: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "374",
                destination: "> SENGKANG INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "SENGKANG EAST WAY",
                    "ANCHORVALE CRES",
                    "COMPASSVALE RD",
                    "SENGKANG EAST WAY",
                    "FERNVALE RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "374",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    381: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "381",
                destination: "> PUNGGOL ",
                destinationFont: "LECIP-10",
                scrolls: [
                    "PUNGGOL FIELD",
                    "PUNGGOL CENTRAL",
                    "EDGEFIELD PLAINS",
                    "PUNGGOL CENTRAL",
                    "PUNGGOL FIELD",
                    "PUNGGOL EAST",
                    "PUNGGOL FIELD",
                    "EDGEFIELD PLAINS",
                    "PUNGGOL CENTRAL",
                    "PUNGGOL FIELD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "381",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "382G": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "382G",
                destination: "> PUNGGOL",
                destinationFont: "LECIP-10",
                scrolls: [
                    "PUNGGOL FIELD",
                    "SENTUL CRESCENT",
                    "SUMANG LINK",
                    "SUMANG WALK"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "382G",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "382W": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "382W",
                destination: "> PUNGGOL",
                destinationFont: "LECIP-10",
                scrolls: [
                    "SUMANG WALK",
                    "SUMANG LINK",
                    "SENTUL CRESCENT",
                    "PUNGGOL FIELD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "382W",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    384: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "384",
                destination: "> PUNGGOL",
                destinationFont: "LECIP-10",
                scrolls: [
                    "PUNGGOL CENTRAL",
                    "PUNGGOL WAY",
                    "NORTHSHORE DR",
                    "PUNGGOL WAY",
                    "PUNGGOL CENTRAL"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "384",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    386: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "386",
                destination: "> PUNGGOL",
                destinationFont: "LECIP-10",
                scrolls: [
                    "PUNGGOL CENTRAL",
                    "EDGEFIELD PLAINS"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "386",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    400: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "400",
                serviceFont: "LECIP-20:9",
                destination: "SHENTON WY TER-M.COASTAL",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "MARINA BOULEVARD",
                    "MARINA GDNS DR",
                    "MARINA COSTAL DR",
                    "CENTRAL BOULEVARD",
                    "SHENTON WAY"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "400",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "400",
                destination: "SHENTON WY TER-M.GDNS DR",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "MARINA BOULEVARD",
                    "MARINA GDNS DR",
                    "CENTRAL BOULEVARD",
                    "SHENTON WAY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "400",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    401: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "401",
                destination: "BEDOK INT-FORT RD",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'EAST COAST PARK SVC RD',
                    'MARINE PARADE RD',
                    'TANJONG KATONG RD',
                    'OLD AIRPORT RD',
                    'FORT RD',
                    'EAST COAST PARK SVC RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "401",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
    },
    402: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "402",
                serviceFont: "LECIP-20:9",
                destination: "SHENTON WY TER-M.COASTAL",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "MARINA BOULEVARD",
                    "MARINA COSTAL DR",
                    "CENTRAL BOULEVARD",
                    "SHENTON WAY"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "402",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    403: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "403",
                destination: "PASIR RIS - PASIR RIS RD",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'PASIR RIS DR 1',
                    'ELIAS RD',
                    'PASIR RIS RD',
                    'ELIAS RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "403",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    405: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "405",
                destination: "BOON LAY INT-OLD CCK RD",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "JURONG WEST CENTRAL 1",
                    "JALAN BOON LAY",
                    "JALAN BAHAR",
                    "OLD CHOA CHU KANG RD",
                    "JALAN BAHAR",
                    "JALAN BOON LAY",
                    "JURONG WEST CENTRAL 1"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "405",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "405M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "405M",
                destination: "BOON LAY INT-OLD CCK RD",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "JURONG WEST CENTRAL 1",
                    "JALAN BOON LAY",
                    "JALAN BAHAR",
                    "OLD CHOA CHU KANG RD",
                    "JALAN BAHAR",
                    "JALAN BOON LAY",
                    "JURONG WEST CENTRAL 1"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "405M",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    "408": {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "408",
                branding: "PARKS",
                font: "LECIP-20:12",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "408",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "408",
                destination: "LABRADOR PARK (LOOP)",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "HARBOURFRONT INT"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "408",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "409": {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "409",
                branding: "PARKS",
                font: "LECIP-20:12",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "409",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "409",
                destination: "MOUNT FABER (LOOP)",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "HARBOURFRONT INT"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "409",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "410G": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "410G",
                destination: "> BISHAN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "BISHAN ST 21",
                    "UPP THOMSON RD",
                    "SIN MING AVE",
                    "BISHAN ST 22"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "410G",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    "410W": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "410W",
                destination: "> BISHAN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "BISHAN ST 22",
                    "SIN MING AVE",
                    "UPPER THOMSON RD",
                    "SHUNFU RD",
                    "BISHAN ST 21",
                    "BISHAN ST 12",
                    "BISHAN ST 14"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "410W",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    420: {
        1: {
            front: {
                renderType: "message",
                text: "EW1",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: 'message',
                text: "EW1",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    421: {
        1: {
            front: {
                renderType: "message",
                text: "EW5",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: 'message',
                text: "EW5",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    422: {
        1: {
            front: {
                renderType: "message",
                text: "NS16",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: 'message',
                text: "NS16",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    423: {
        1: {
            front: {
                renderType: "message",
                text: "EW27",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: 'message',
                text: "EW27",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    424: {
        1: {
            front: {
                renderType: "twoline",
                top: "SCSM 2017",
                topFont: "LECIP-7:5",

                bottom: "KALLANG",
                bottomFont: "LECIP-10"
            },
            rear: {
                renderType: "twoline",
                top: "SCSM 17",
                topFont: "LECIP-6:3",

                bottom: "KALLANG",
                bottomFont: "LECIP-6:3"
            }
        }
    },
    425: {
        1: {
            front: {
                renderType: "twoline",
                top: "SCSM 2017",
                topFont: "LECIP-7:5",

                bottom: "ORCHARD",
                bottomFont: "LECIP-10"
            },
            rear: {
                renderType: "twoline",
                top: "SCSM 17",
                topFont: "LECIP-6:3",

                bottom: "ORCHARD",
                bottomFont: "LECIP-6:3"
            }
        }
    },
    426: {
        1: {
            front: {
                renderType: "twoline",
                top: "SCSM 2017",
                topFont: "LECIP-7:5",

                bottom: "SOMERSET",
                bottomFont: "LECIP-10"
            },
            rear: {
                renderType: "twoline",
                top: "SCSM 17",
                topFont: "LECIP-6:3",

                bottom: "SOMERSET",
                bottomFont: "LECIP-6:3"
            }
        }
    },
    427: {
        1: {
            front: {
                renderType: "twoline",
                top: "ULU PANDAN",
                topFont: "LECIP-7:5",

                bottom: "BUS DEPOT CARNIVAL",
                bottomFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "ULU",
                topFont: "LECIP-6:3",

                bottom: "PANDAN",
                bottomFont: "LECIP-6:3"
            }
        }
    },
    428: {
        1: {
            front: {
                renderType: "twoline",
                top: "BUKIT MERAH /",
                topFont: "LECIP-7:5",

                bottom: "HARBOURFRONT INTERCHANGE",
                bottomFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "BMI /",
                topFont: "LECIP-7:5",

                bottom: "HBF",
                bottomFont: "LECIP-7:5"
            }
        }
    },
    429: {
        1: {
            front: {
                renderType: "twoline",
                top: "JURONG EAST",
                topFont: "LECIP-7:5",

                bottom: "INTERCHANGE",
                bottomFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "JURONG",
                topFont: "LECIP-6:3",

                bottom: "EAST",
                bottomFont: "LECIP-6:3"
            }
        }
    },
    430: {
        1: {
            front: {
                renderType: "message",
                text: "HAPPY CNY",
                font: "LECIP-20:12",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "HAPPY",
                topFont: "LECIP-7:5",

                bottom: "CNY",
                bottomFont: "LECIP-7:5"
            }
        }
    },
    431: {
        1: {
            front: {
                renderType: "twoline",
                top: "EUNOS - UBI",
                topFont: "LECIP-7:5",

                bottom: "BRIDGING BUS",
                bottomFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "EUN - ",
                topFont: "LECIP-7:5",

                bottom: "UBI",
                bottomFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "twoline",
                top: "UBI - EUNOS",
                topFont: "LECIP-7:5",

                bottom: "BRIDGING BUS",
                bottomFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "UBI - ",
                topFont: "LECIP-7:5",

                bottom: "EUN",
                bottomFont: "LECIP-7:5"
            }
        }
    },
    432: {
        1: {
            front: {
                renderType: "twoline",
                top: "SERANGOON - AMK",
                topFont: "LECIP-7:5",

                bottom: "BRIDGING BUS",
                bottomFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "SGN - ",
                topFont: "LECIP-7:5",

                bottom: "AMK",
                bottomFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "twoline",
                top: "AMK - SERANGOON",
                topFont: "LECIP-7:5",

                bottom: " ",
                bottomFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "AMK - ",
                topFont: "LECIP-7:5",

                bottom: "SGN",
                bottomFont: "LECIP-7:5"
            }
        }
    },
    433: {
        1: {
            front: {
                renderType: "swt",
                serviceNumber: "59A",
                terminateAt: "LOR 1 TOA PAYOH",
                landmark: "(BRADDELL STN/BLK 107)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "59A",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "swt",
                serviceNumber: "59B",
                terminateAt: "TAMPINES AVE 2",
                landmark: "(TAMPINES EAST STN EXIT C)"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "59B",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    434: {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "116C",
                branding: "PARIS",
                font: "LECIP-20:12",
                spacing: 1
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "116C",
                font: "LECIP-20:6",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "twoline",
                top: "SHUTTLE 1",
                topFont: "LECIP-7:5",

                bottom: "LONDON - PARIS",
                bottomFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "LONDON",
                topFont: "LECIP-6:4",

                bottom: "- PARIS",
                bottomFont: "LECIP-6:4"
            }
        }
    },
    435: {
        1: {
            front: {
                renderType: "twoline",
                top: "SHUTTLE A",
                topFont: "LECIP-7:5",

                bottom: "ANG MO KIO - SELETAR",
                bottomFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "AMK -",
                topFont: "LECIP-6:3",

                bottom: "SELETAR",
                bottomFont: "LECIP-6:3"
            }
        },
        2: {
            front: {
                renderType: "twoline",
                top: "SHUTTLE A",
                topFont: "LECIP-7:5",

                bottom: "SELETAR - ANG MO KIO",
                bottomFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "SELETAR",
                topFont: "LECIP-6:3",

                bottom: "- AMK",
                bottomFont: "LECIP-6:3"
            }
        }
    },
    436: {
        1: {
            front: {
                renderType: "twoline",
                top: "SHUTTLE B",
                topFont: "LECIP-7:5",

                bottom: "YIO CHU KANG - SELETAR",
                bottomFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "YCK -",
                topFont: "LECIP-6:3",

                bottom: "SELETAR",
                bottomFont: "LECIP-6:3"
            }
        },
        2: {
            front: {
                renderType: "twoline",
                top: "SHUTTLE B",
                topFont: "LECIP-7:5",

                bottom: "SELETAR - YCK",
                bottomFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "SELETAR",
                topFont: "LECIP-6:3",

                bottom: "- YCK",
                bottomFont: "LECIP-6:3"
            }
        }
    },
    437: {
        1: {
            front: {
                renderType: "twoline",
                top: "SHUTTLE C",
                topFont: "LECIP-7:5",

                bottom: "YISHUN - SELETAR",
                bottomFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "YISHUN -",
                topFont: "LECIP-6:3",

                bottom: "SELETAR",
                bottomFont: "LECIP-6:3"
            }
        },
        2: {
            front: {
                renderType: "twoline",
                top: "SHUTTLE C",
                topFont: "LECIP-7:5",

                bottom: "SELETAR - YISHUN",
                bottomFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "SELETAR",
                topFont: "LECIP-6:3",

                bottom: "- YISHUN",
                bottomFont: "LECIP-6:3"
            }
        }
    },
    "454": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "454",
                destination: "TAMP NTH INT - TAMP ST 86 (LOOP)",
                destinationFont: "LECIP-6:3",
                scrolls: [
                    {
                        renderType: 'twoline3',

                        serviceNumber: "454",

                        top: "TAMPINES ST 62",
                        topFont: "LECIP-7:5",
                        spacingTop: "2",
        
                        bottom: "TAMP NTH INtAMP ST 86(LOOP)",
                        bottomFont: "LECIP-9:3",
                        marginBottom: "-1"
                    },
                    {
                        renderType: 'twoline3',

                        serviceNumber: "454",

                        top: "TAMPINES CTRL 1",
                        topFont: "LECIP-7:5",
                        spacingTop: "2",
        
                        bottom: "TAMP NTH INtAMP ST 86(LOOP)",
                        bottomFont: "LECIP-9:3",
                        marginBottom: "-1"
                    },
                    {
                        renderType: 'twoline3',

                        serviceNumber: "454",

                        top: "TAMPINES ST 86",
                        topFont: "LECIP-7:5",
                        spacingTop: "2",
        
                        bottom: "TAMP NTH INtAMP ST 86(LOOP)",
                        bottomFont: "LECIP-9:3",
                        marginBottom: "-1"
                    },
                    {
                        renderType: 'twoline3',

                        serviceNumber: "454",

                        top: "TAMPINES AVE 4",
                        topFont: "LECIP-7:5",
                        spacingTop: "2",
        
                        bottom: "TAMP NTH INtAMP ST 86(LOOP)",
                        bottomFont: "LECIP-9:3",
                        marginBottom: "-1"
                    },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "454",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    456: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "456",
                destination: "ST MICHAEL'S TER - NOVENA STN",
                destinationFont: "LECIP-6:4",
                scrolls: [
                {
                    renderType: "centreMessageServiceScroll",

                    top: "ST MICHAEL'S TER -",
                    topFont: "LECIP-7:5",

                    bottom: " NOVENA STN (LOOP)",
                    bottomFont: "LECIP-7:5",

                    serviceNumber: "456",
                },  
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "456",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    498: {
        1: {
            front: {
                renderType: "message",
                text: "SBS TRANSIT CARES COMMUNITY BUS",
                font: "LECIP-6:4",
                spacing: 1
            },
            rear: {
                renderType: 'twoline',
                top: "",
                topFont: "LECIP-7:5",

                bottom: "",
                bottomFont: "LECIP-7:5"
            }
        }
    },
    499: {
        1: {
            front: {
                renderType: "twoline",
                top: "50 YRS OF TRAVELLING TOGETHER",
                topFont: "LECIP-7:5",

                bottom: "WITH SBS TRANSIT",
                bottomFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "SBST",
                topFont: "LECIP-7:5",

                bottom: "50",
                bottomFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "twoline",
                top: "JOURNEYING WITH YOU",
                topFont: "Mobitec-7:4",

                bottom: "50 YEARS OF MOBILITY EXCELLENCE",
                bottomFont: "Mobitec-7:4"
            },
            rear: {
                renderType: "twoline",
                top: "SBST",
                topFont: "LECIP-7:5",

                bottom: "50",
                bottomFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "SBST",
                topFont: "LECIP-7:5",

                bottom: "50",
                bottomFont: "LECIP-7:5"
            }
        }
    },
    502: {
        1: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "502",
                image: "express",
                destination: "EXPRESS 502"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "502",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "502",
                image: "express",
                destination: "EXPRESS 502"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "502",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "502A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "502A",
                destination: "DOWNTOWN STN",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "502A",
                    landmark: "CTRL BLVD (DOWNTOWN STN)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "502A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    506: {
        1: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "506",
                image: "express",
                destination: "EXPRESS 506"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "506",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "506",
                image: "express",
                destination: "EXPRESS 506"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "506",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    513: {
        1: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "513",
                image: "express",
                destination: "EXPRESS 513"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "513",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "513",
                image: "express",
                destination: "EXPRESS 513"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "513",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    518: {
        1: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "518",
                image: "express",
                destination: "EXPRESS 518"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "518",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "518",
                image: "express",
                destination: "EXPRESS 518"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "518",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "518A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "518A",
                destination: "BAYFRONT AVE",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "518A",
                    terminateAt: "BAYFRONT AVE",
                    landmark: "(OPP MARINA BAY SANDS MICE)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "518A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    532: {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "532",
                branding: "PREMIUM",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "532",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    533: {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "533",
                branding: "PREMIUM",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "533",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    534: {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "534",
                branding: "PREMIUM",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "534",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    535: {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "535",
                branding: "PREMIUM",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "535",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    536: {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "536",
                branding: "PREMIUM",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "536",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    537: {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "537",
                branding: "PREMIUM",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "537",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    538: {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "538",
                branding: "PREMIUM",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "538",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    539: {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "539",
                branding: "PREMIUM",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "539",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    540: {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "540",
                branding: "PREMIUM",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "540",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    542: {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "542",
                branding: "PREMIUM",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "542",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    543: {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "543",
                branding: "PREMIUM",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "543",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    544: {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "544",
                branding: "PREMIUM",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "544",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    545: {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "545",
                branding: "PREMIUM",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "545",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    548: {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "548",
                branding: "PREMIUM",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "548",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    549: {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "549",
                branding: "PREMIUM",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "549",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    550: {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "550",
                branding: "PREMIUM",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "550",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    551: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "551",
                destination: "> TEMASEK BOULEVARD",
                destinationFont: "LECIP-7:5",
                scrolls: [{
                        renderType: "brandedSvc",
                        serviceNumber: "551",
                        branding: "CITY SHOPPER",
                        font: "LECIP-20:6",
                        spacing: 2
                    },
                    "HOUGANG AVE 8",
                    "ANG MO KIO AVE 3",
                    "CTE",
                    "SCOTTS RD",
                    "ORCHARD RD",
                    "BRAS BASAH RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "551",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "551",
                destination: "> UPP SERANGOON RD",
                destinationFont: "LECIP-7:5",
                scrolls: [{
                        renderType: "brandedSvc",
                        serviceNumber: "551",
                        branding: "CITY SHOPPER",
                        font: "LECIP-20:6",
                        spacing: 2
                    },
                    "ORCHARD RD",
                    "BRAS BASAH RD",
                    "TEMASEK BOULEVARD",
                    "CTE",
                    "ANG MO KIO AVE 3",
                    "HOUGANG AVE 8"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "551",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    552: {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "552",
                branding: "PREMIUM",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "552",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    553: {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "553",
                branding: "PREMIUM",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "553",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    554: {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "554",
                branding: "PREMIUM",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "554",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    555: {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "555",
                branding: "PREMIUM",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "555",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    556: {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "556",
                branding: "PREMIUM",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "556",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    557: {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "557",
                branding: "PREMIUM",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "557",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    558: {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "558",
                branding: "PREMIUM",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "558",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    559: {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "559",
                branding: "PREMIUM",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "559",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    560: {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "560",
                branding: "PREMIUM",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "560",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    561: {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "561",
                branding: "PREMIUM",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "561",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    563: {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "563",
                branding: "PREMIUM",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "563",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    564: {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "564",
                branding: "PREMIUM",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "564",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    565: {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "565",
                branding: "PREMIUM",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "565",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    566: {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "566",
                branding: "PREMIUM",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "566",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    569: {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "569",
                branding: "PREMIUM",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "569",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    575: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "575",
                destination: "> TEMASEK AVE",
                destinationFont: "LECIP-10",
                scrolls: [{
                        renderType: "brandedSvc",
                        serviceNumber: "575",
                        branding: "CITY SHOPPER",
                        font: "LECIP-20:6",
                        spacing: 2
                    },
                    "BEDOK SOUTH AVE 3",
                    "NEW UPPER CHANGI RD",
                    "BEDOK SOUTH RD",
                    "PIE",
                    "SCOTTS RD",      
                    "ORCHARD RD",
                    "BRAS BASAH RD",
                    "TEMASEK BOULEVARD"      
                          
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "575",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "575",
                destination: "> BEDOK NORTH RD",
                destinationFont: "LECIP-7:5",
                scrolls: [{
                        renderType: "brandedSvc",
                        serviceNumber: "575",
                        branding: "CITY SHOPPER",
                        font: "LECIP-20:6",
                        spacing: 2
                    },
                    "ORCHARD RD",
                    "BRAS BASAH RD",
                    "TEMASEK BOULEVARD",
                    "ECP",
                    "BEDOK SOUTH RD",      
                    "NEW UPPER CHANGI RD",
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "575",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    576: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "576",
                destination: "> TEMASEK AVE",
                destinationFont: "LECIP-10",
                scrolls: [{
                        renderType: "brandedSvc",
                        serviceNumber: "576",
                        branding: "CITY SHOPPER",
                        font: "LECIP-20:6",
                        spacing: 2
                    },
                    "TAMPINES AVE 4",
                    "TAMPINES AVE 3",
                    "TAMPINES AVE 8, 1",
                    "PIE",
                    "SCOTTS RD",      
                    "ORCHARD RD",
                    "BRAS BASAH RD",
                    "TEMASEK BOULEVARD"      
                          
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "576",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "576",
                destination: "> TAMPINES AVE 8",
                destinationFont: "LECIP-7:5",
                scrolls: [{
                        renderType: "brandedSvc",
                        serviceNumber: "576",
                        branding: "CITY SHOPPER",
                        font: "LECIP-20:6",
                        spacing: 2
                    },
                    "ORCHARD RD",
                    "BRAS BASAH RD",
                    "TEMASEK BOULEVARD",
                    "ECP",
                    "TAMPINES AVE 7",
                    "TAMPINES AVE 4",      
                    "TAMPINES AVE 3",
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "576",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    577: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "577",
                destination: "> TEMASEK BOULEVARD",
                destinationFont: "LECIP-7:5",
                scrolls: [{
                        renderType: "brandedSvc",
                        serviceNumber: "577",
                        branding: "CITY SHOPPER",
                        font: "LECIP-20:6",
                        spacing: 2
                    },
                    "ANG MO KIO AVE 4",
                    "ANG MO KIO AVE 3",
                    "ANG MO KIO AVE 3",
                    "CTE",
                    "SCOTTS RD",      
                    "ORCHARD RD",
                    "BRAS BASAH RD",
                    "TEMASEK BOULEVARD"      
                          
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "576",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "577",
                destination: "> ANG MO KIO AVE 9",
                destinationFont: "LECIP-7:5",
                scrolls: [{
                        renderType: "brandedSvc",
                        serviceNumber: "577",
                        branding: "CITY SHOPPER",
                        font: "LECIP-20:6",
                        spacing: 2
                    },
                    "ORCHARD RD",
                    "BRAS BASAH RD",
                    "TEMASEK BOULEVARD",
                    "CTE",
                    "ANG MO KIO AVE 10",
                    "ANG MO KIO AVE 3",      
                    "ANG MO KIO AVE 4",
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "577",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    577: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "577",
                destination: "> TEMASEK BOULEVARD",
                destinationFont: "LECIP-7:5",
                scrolls: [{
                        renderType: "brandedSvc",
                        serviceNumber: "577",
                        branding: "CITY SHOPPER",
                        font: "LECIP-20:6",
                        spacing: 2
                    },
                    "ANG MO KIO AVE 4",
                    "ANG MO KIO AVE 3",
                    "ANG MO KIO AVE 3",
                    "CTE",
                    "SCOTTS RD",      
                    "ORCHARD RD",
                    "BRAS BASAH RD",      
                          
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "577",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "577",
                destination: "> ANG MO KIO AVE 9",
                destinationFont: "LECIP-7:5",
                scrolls: [{
                        renderType: "brandedSvc",
                        serviceNumber: "577",
                        branding: "CITY SHOPPER",
                        font: "LECIP-20:6",
                        spacing: 2
                    },
                    "ORCHARD RD",
                    "BRAS BASAH RD",
                    "TEMASEK BOULEVARD",
                    "CTE",
                    "ANG MO KIO AVE 10",
                    "ANG MO KIO AVE 3",      
                    "ANG MO KIO AVE 4",
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "577",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    578: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "578",
                destination: "> TEMASEK BOULEVARD",
                destinationFont: "LECIP-7:5",
                scrolls: [{
                        renderType: "brandedSvc",
                        serviceNumber: "578",
                        branding: "CITY SHOPPER",
                        font: "LECIP-20:6",
                        spacing: 2
                    },
                    "PUNGGOL RD",
                    "SENGKANG EAST AVE",
                    "SENGKANG WEST AVE",
                    "JALAN KAYU",
                    "YIO CHU KANG RD",
                    "CTE",
                    "SCOTTS RD",      
                    "ORCHARD RD",
                    "BRAS BASAH RD"      
                          
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "578",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "578",
                destination: "> COMPASSVALE ST",
                destinationFont: "LECIP-7:5",
                scrolls: [{
                        renderType: "brandedSvc",
                        serviceNumber: "578",
                        branding: "CITY SHOPPER",
                        font: "LECIP-20:6",
                        spacing: 2
                    },
                    "ORCHARD RD",
                    "BRAS BASAH RD",
                    "TEMASEK BOULEVARD",
                    "CTE",
                    "YIO CHU KANG RD",
                    "JALAN KAYU",
                    "SENGKANG WEST AVE",
                    "SENGKANG EAST AVE",     
                    "PUNGGOL RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "578",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    579: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "579",
                destination: "> TEMASEK AVE",
                destinationFont: "LECIP-10",
                scrolls: [{
                        renderType: "brandedSvc",
                        serviceNumber: "579",
                        branding: "CITY SHOPPER",
                        font: "LECIP-20:6",
                        spacing: 2
                    },
                    "TAMPINES AVE 9",
                    "TAMPINES ST 45",
                    "TAMPINES ST 32",
                    "TAMPINES AVE 2",
                    "SIMEI RD",
                    "SIMEI ST 1, 3",
                    "PIE",
                    "SCOTTS RD",      
                    "ORCHARD RD",
                    "BRAS BASAH RD",
                    "TEMASEK BOULEVARD"      
                          
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "579",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "579",
                destination: "> TAMPINES AVE 9",
                destinationFont: "LECIP-7:5",
                scrolls: [{
                        renderType: "brandedSvc",
                        serviceNumber: "579",
                        branding: "CITY SHOPPER",
                        font: "LECIP-20:6",
                        spacing: 2
                    },
                    "ORCHARD RD",
                    "BRAS BASAH RD",
                    "TEMASEK BOULEVARD",
                    "ECP",
                    "SIMEI ST 3, 1", 
                    "SIMEI RD",
                    "TAMPINES AVE 2",
                    "TAMPINES ST 32",
                    "TAMPINES ST 34, 45",
                    "TAMPINES AVE 9"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "579",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    580: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "580",
                destination: "> TEMASEK AVE",
                destinationFont: "LECIP-10",
                scrolls: [{
                        renderType: "brandedSvc",
                        serviceNumber: "580",
                        branding: "CITY SHOPPER",
                        font: "LECIP-20:6",
                        spacing: 2
                    },
                    "WEST COAST RD",
                    "AYE",     
                    "ORCHARD RD",
                    "BRAS BASAH RD",
                    "TEMASEK BOULEVARD"      
                          
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "580",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "580",
                destination: "> TEBAN GARDENS RD",
                destinationFont: "LECIP-7:5",
                scrolls: [{
                        renderType: "brandedSvc",
                        serviceNumber: "580",
                        branding: "CITY SHOPPER",
                        font: "LECIP-20:6",
                        spacing: 2
                    },
                    "ORCHARD RD",
                    "BRAS BASAH RD",
                    "TEMASEK BOULEVARD",
                    "AYE",
                    "WEST COAST RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "580",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    581: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "581",
                destination: "> TEMASEK BOULEVARD",
                destinationFont: "LECIP-7:5",
                scrolls: [{
                        renderType: "brandedSvc",
                        serviceNumber: "581",
                        branding: "CITY SHOPPER",
                        font: "LECIP-20:6",
                        spacing: 2
                    },
                    "PUNGGOL EAST",
                    "PUNGGOL FIELD",
                    "CTE",
                    "SCOTTS RD",      
                    "ORCHARD RD",
                    "BRAS BASAH RD"    
                          
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "581",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "581",
                destination: "> PUNGGOL CENTRAL",
                destinationFont: "LECIP-7:5",
                scrolls: [{
                        renderType: "brandedSvc",
                        serviceNumber: "581",
                        branding: "CITY SHOPPER",
                        font: "LECIP-20:6",
                        spacing: 2
                    },
                    "ORCHARD RD",
                    "BRAS BASAH RD",
                    "TEMASEK BOULEVARD",
                    "CTE",
                    "PUNGGOL FIELD", 
                    "PUNGGOL EAST"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "581",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    585: {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "585",
                branding: "PREMIUM",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "585",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    761: {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "761",
                branding: "PREMIUM",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "761",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    601: {
        1: {
            front: {
                renderType: 'on-demand',
                serviceNumber: 'JK-1',
                area: '(JOO KOON)'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "JK-1",
                font: "LECIP-14:6",
                spacing: 2
            }
        }
    },
    602: {
        1: {
            front: {
                renderType: 'on-demand',
                serviceNumber: 'JK-2',
                area: '(JOO KOON)'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "JK-2",
                font: "LECIP-14:6",
                spacing: 2
            }
        }
    },
    603: {
        1: {
            front: {
                renderType: 'on-demand',
                serviceNumber: 'JK-3',
                area: '(JOO KOON)'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "JK-3",
                font: "LECIP-14:6",
                spacing: 2
            }
        }
    },
    604: {
        1: {
            front: {
                renderType: 'on-demand',
                serviceNumber: 'JK-4',
                area: '(JOO KOON)'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "JK-4",
                font: "LECIP-14:6",
                spacing: 2
            }
        }
    },
    605: {
        1: {
            front: {
                renderType: 'on-demand',
                serviceNumber: 'JK-5',
                area: '(JOO KOON)'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "JK-5",
                font: "LECIP-14:6",
                spacing: 2
            }
        }
    },
    606: {
        1: {
            front: {
                renderType: 'on-demand',
                serviceNumber: 'JK-6',
                area: '(JOO KOON)'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "JK-6",
                font: "LECIP-14:6",
                spacing: 2
            }
        }
    },
    607: {
        1: {
            front: {
                renderType: 'on-demand',
                serviceNumber: 'JK-7',
                area: '(JOO KOON)'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "JK-7",
                font: "LECIP-14:6",
                spacing: 2
            }
        }
    },
    608: {
        1: {
            front: {
                renderType: 'on-demand',
                serviceNumber: 'JK-8',
                area: '(JOO KOON)'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "JK-8",
                font: "LECIP-14:6",
                spacing: 2
            }
        }
    },
    609: {
        1: {
            front: {
                renderType: 'on-demand',
                serviceNumber: 'JK-9',
                area: '(JOO KOON)'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "JK-9",
                font: "LECIP-14:6",
                spacing: 2
            }
        }
    },
    "609D": { // kept for historic purposes
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "DTL",
                destination: "> CHINATOWN",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "BEAUTY WORLD",
                    "BOTANIC GARDENS",
                    "NEWTON",
                    "BUGIS"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "DTL",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "DTL",
                destination: "> BUKIT PANJANG",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "BUGIS",
                    "NEWTON",
                    "BOTANIC GARDENS",
                    "BEAUTY WORLD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "DTL",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    610: {
        1: {
            front: {
                renderType: 'on-demand',
                serviceNumber: 'JK-10',
                area: '(JOO KOON)'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "JK-10",
                font: "LECIP-14:6",
                spacing: 1
            }
        }
    },
    611: {
        1: {
            front: {
                renderType: 'on-demand',
                serviceNumber: 'JK-11',
                area: '(JOO KOON)'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "JK-11",
                font: "LECIP-14:6",
                spacing: 1
            }
        }
    },
    612: {
        1: {
            front: {
                renderType: 'on-demand',
                serviceNumber: 'JK-12',
                area: '(JOO KOON)'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "JK-12",
                font: "LECIP-14:6",
                spacing: 1
            }
        }
    },
    613: {
        1: {
            front: {
                renderType: 'on-demand',
                serviceNumber: 'JK-13',
                area: '(JOO KOON)'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "JK-13",
                font: "LECIP-14:6",
                spacing: 1
            }
        }
    },
    621: {
        1: {
            front: {
                renderType: 'on-demand',
                serviceNumber: 'MD-1',
                area: '(MARINA-DOWNTOWN)'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "MD-1",
                font: "LECIP-14:6",
                spacing: 1
            }
        }
    },
    622: {
        1: {
            front: {
                renderType: 'on-demand',
                serviceNumber: 'MD-2',
                area: '(MARINA-DOWNTOWN)'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "MD-2",
                font: "LECIP-14:6",
                spacing: 1
            }
        }
    },
    623: {
        1: {
            front: {
                renderType: 'on-demand',
                serviceNumber: 'MD-3',
                area: '(MARINA-DOWNTOWN)'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "MD-3",
                font: "LECIP-14:6",
                spacing: 1
            }
        }
    },
    624: {
        1: {
            front: {
                renderType: 'on-demand',
                serviceNumber: 'MD-4',
                area: '(MARINA-DOWNTOWN)'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "MD-4",
                font: "LECIP-14:6",
                spacing: 1
            }
        }
    },
    625: {
        1: {
            front: {
                renderType: 'on-demand',
                serviceNumber: 'MD-5',
                area: '(MARINA-DOWNTOWN)'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "MD-5",
                font: "LECIP-14:6",
                spacing: 1
            }
        }
    },
    626: {
        1: {
            front: {
                renderType: 'on-demand',
                serviceNumber: 'MD-6',
                area: '(MARINA-DOWNTOWN)'
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "MD-6",
                font: "LECIP-14:6",
                spacing: 1
            }
        }
    },
    652: {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "652",
                branding: "CITY DIRECT",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "652",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "652",
                branding: "CITY DIRECT",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "652",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    654: {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "654",
                branding: "CITY DIRECT",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "654",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "654",
                branding: "CITY DIRECT",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "654",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    655: {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "655",
                branding: "CITY DIRECT",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "655",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "655",
                branding: "CITY DIRECT",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "655",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    660: {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "660",
                branding: "CITY DIRECT",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "660",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "660",
                branding: "CITY DIRECT",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "660",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "660M": {
        1: {
            front: {
                renderType: "brandedSvc3",
                serviceNumber: "660M",
                branding: "CITY DIRECT",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "660M",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    667: {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "667",
                branding: "CITY DIRECT",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "667",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "667",
                branding: "CITY DIRECT",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "667",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    668: {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "668",
                branding: "CITY DIRECT",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "668",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "668",
                branding: "CITY DIRECT",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "668",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    671: {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "671",
                branding: "CITY DIRECT",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "671",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "671",
                branding: "CITY DIRECT",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "671",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    672: {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "672",
                branding: "CITY DIRECT",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "672",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "672",
                branding: "CITY DIRECT",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "672",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    675: {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "675",
                branding: "CITY DIRECT",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "675",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "675",
                branding: "CITY DIRECT",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "675",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    676: {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "676",
                branding: "CITY DIRECT",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "676",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "676",
                branding: "CITY DIRECT",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "676",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    677: {
        1: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "677",
                branding: "CITY DIRECT",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "677",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "brandedSvc",
                serviceNumber: "677",
                branding: "CITY DIRECT",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "677",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    702: {
        1: {
            front: {
                renderType: "twoline",
                top: "SHUTTLE 2",
                topFont: "LECIP-7:5",

                bottom: "JOO KOON - BUONA VISTA",
                bottomFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "JKN-",
                topFont: "LECIP-7:5",

                bottom: "BNV",
                bottomFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "twoline",
                top: "SHUTTLE 2",
                topFont: "LECIP-7:5",

                bottom: "BUONA VISTA - JOO KOON",
                bottomFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "BNV-",
                topFont: "LECIP-7:5",

                bottom: "JKN",
                bottomFont: "LECIP-7:5"
            }
        }
    },
    705: {
        1: {
            front: {
                renderType: "twoline",
                top: "EXPRESS 5",
                topFont: "LECIP-7:5",

                bottom: "BOON LAY - OUTRAM PARK",
                bottomFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "BNL-",
                topFont: "LECIP-7:5",

                bottom: "OTP",
                bottomFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "twoline",
                top: "EXPRESS 5",
                topFont: "LECIP-7:5",

                bottom: "OUTRAM PARK - BOON LAY",
                bottomFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "OTP-",
                topFont: "LECIP-7:5",

                bottom: "BNL",
                bottomFont: "LECIP-7:5"
            }
        }
    },
    706: {
        1: {
            front: {
                renderType: "twoline",
                top: "SHUTTLE 6",
                topFont: "LECIP-7:5",

                bottom: "RAFFLES PLACE - PAYA LEBAR",
                bottomFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "RFP-",
                topFont: "LECIP-7:5",

                bottom: "PYL",
                bottomFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "twoline",
                top: "SHUTTLE 6",
                topFont: "LECIP-7:5",

                bottom: "PAYA LEBAR - RAFFLES PLACE",
                bottomFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "PYL-",
                topFont: "LECIP-7:5",

                bottom: "RFP",
                bottomFont: "LECIP-7:5"
            }
        }
    },
    707: {
        1: {
            front: {
                renderType: "twoline",
                top: "SHUTTLE 7",
                topFont: "LECIP-7:5",

                bottom: "PAYA LEBAR - PASIR RIS",
                bottomFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "PYL-",
                topFont: "LECIP-7:5",

                bottom: "PSR",
                bottomFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "twoline",
                top: "SHUTTLE 7",
                topFont: "LECIP-7:5",

                bottom: "PASIR RIS - PAYA LEBAR",
                bottomFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "PSR-",
                topFont: "LECIP-7:5",

                bottom: "PYL",
                bottomFont: "LECIP-7:5"
            }
        }
    },
    713: {
        1: {
            front: {
                renderType: "twoline",
                top: "EXPRESS 13",
                topFont: "LECIP-7:5",

                bottom: "BEDOK - BEDOK NORTH",
                bottomFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "BDK-",
                topFont: "LECIP-7:5",

                bottom: "BDN",
                bottomFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "twoline",
                top: "EXPRESS 13",
                topFont: "LECIP-7:5",

                bottom: "BEDOK NORTH - BEDOK",
                bottomFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "BDN-",
                topFont: "LECIP-7:5",

                bottom: "BDK",
                bottomFont: "LECIP-7:5"
            }
        }
    },
    721: {
        1: {
            front: {
                renderType: "twoline",
                top: "SHUTTLE 21",
                topFont: "LECIP-7:5",

                bottom: "SERANGOON - PUNGGOL",
                bottomFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "SRG -",
                topFont: "LECIP-7:5",

                bottom: "PGL",
                bottomFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "twoline",
                top: "SHUTTLE 21",
                topFont: "LECIP-7:5",

                bottom: "PUNGGOL - SERANGOON",
                bottomFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "PGL -",
                topFont: "LECIP-7:5",

                bottom: "SRG",
                bottomFont: "LECIP-7:5"
            }
        }
    },
    722: {
        1: {
            front: {
                renderType: "twoline",
                top: "SHUTTLE 22",
                topFont: "LECIP-7:5",

                bottom: "SERANGOON - HARBOURFRONT",
                bottomFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "SRG -",
                topFont: "LECIP-7:5",

                bottom: "HBF",
                bottomFont: "LECIP-7:5"
            }
        },
        2: {
            front: {
                renderType: "twoline",
                top: "SHUTTLE 22",
                topFont: "LECIP-7:5",

                bottom: "HARBOURFRONT - SERANGOON",
                bottomFont: "LECIP-7:5"
            },
            rear: {
                renderType: "twoline",
                top: "HBF -",
                topFont: "LECIP-7:5",

                bottom: "SRG",
                bottomFont: "LECIP-7:5"
            }
        }
    },
    770: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "170A",
                destination: "> W'LANDS TRAIN CHECKPT",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "BUKIT TIMAH RD",
                    "UPP BUKIT TIMAH RD",
                    "WOODLANDS RD",
                    "WOODLANDS CTR RD"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "170A",
                font: "LECIP-20:6",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "170A",
                destination: "> QUEEN ST TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "WOODLANDS CTR RD",
                    "WOODLANDS RD",
                    "UPP BUKIT TIMAH RD",
                    "DUNEARN RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "170A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    800: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "800",
                destination: "YISHUN INT-SEMBAWANG RD",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "YISHUN AVE 7",
                    "SEMBAWANG RD",
                    "YISHUN ST 71",
                    "YISHUN RING RD"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "800",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    801: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "801",
                destination: "YISHUN INT - YISHUN AVE 1",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "YISHUN AVE 9",
                    "YISHUN AVE 6",
                    "YISHUN ST 42",
                    "YISHUN AVE 1",
                    "YISHUN AVE 6",
                    "YISHUN AVE 9"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "801",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    803: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "803",
                destination: "YISHUN INT-YISHUN AVE 6",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "YISHUN AVE 6"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "803",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    804: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "804",
                destination: "YISHUN INT-YISHUN AVE 11",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "YISHUN AVE 2",
                    "YISHUN RING RD",
                    "YISHUN ST 41",
                    "YISHUN AVE 1",
                    "YISHUN AVE 11",
                    "YISHUN RING RD"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "804",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    805: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "805",
                destination: "YISHUN INT-YISHUN AVE 1",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "YISHUN AVE 2",
                    "YISHUN AVE 4",
                    "YISHUN AVE 1",
                    "YISHUN RING RD"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "805",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    806: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "806",
                destination: "YISHUN INT-YISHUN AVE 6",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "YISHUN CENTRAL",
                    "YISHUN AVE 11",
                    "YISHUN AVE 6",
                    "YISHUN RING RD"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "806",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    807: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "807",
                destination: "YISHUN INT-YISHUN ST 71",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "YISHUN RING RD",
                    "YISHUN AVE 9",
                    "YISHUN RING RD",
                    "YISHUN AVE 5",
                    "SEMBAWANG RD",
                    "YISHUN ST 71"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "807",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "807A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "807A",
                destination: "YISHUN RING RD",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "807A",
                    landmark: "YISHUN RING RD (OPP BLK798)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "807A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "807B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "807B",
                destination: "YISHUN RING RD",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "807B",
                    terminateAt: "YISHUN RING",
                    landmark: "RD (JIEMIN PRI SCH)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "807B",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    811: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "811",
                destination: "> YISHUN AVE 5&1",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "YISHUN AVE 9,6,7",
                    "SEMBAWANG RD",
                    "YISHUN AVE 5,2",
                    "YISHUN RING RD",
                    "YISHUN AVE 2"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "811",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "811A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "811A",
                destination: "YISHUN AVE 5",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "811A",
                    terminateAt: "YISHUN AVE 5",
                    landmark: "(BLK 151)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "811A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "811T": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "811T",
                destination: "(NORTH LOOP) YISHUN STN",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "811T",
                    landmark: "YISHUN STN EXIT E"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "811T",
                font: "LECIP-20:6",
                spacing: 2
        }
    },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "811T",
                destination: "(SOUTH LOOP) YISHUN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "811T",
                    landmark: "YISHUN INT"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "811T",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    812: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "812",
                destination: "> YISHUN AVE 4&3",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "YISHUN ST 61",
                    "YISHUN AVE 2",
                    "YISHUN RING RD",
                    "YISHUN CENTRAL"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "812",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "812T": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "812T",
                destination: "YISHUN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "812T",
                    landmark: "YISHUN INT"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "812T",
                font: "LECIP-20:6",
                spacing: 1

            }
        }
    },    
    814: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "CT8",
                destination: "> KAMPONG BAHRU TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'ANG MO KIO AVE 4',
                    'ANG MO KIO AVE 3',
                    'ANG MO KIO AVE 10',
                    'NEW BRIDGE RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "CT8",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "CT8",
                destination: "> ANG MO KIO AVE 9",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'EU TONG SEN ST',
                    'ANG MO KIO AVE 10',
                    'ANG MO KIO AVE 3',
                    'ANG MO KIO AVE 4'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "CT8",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "814N": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "CT8",
                destination: "> NEW BRIDGE RD TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'ANG MO KIO AVE 4',
                    'ANG MO KIO AVE 3',
                    'ANG MO KIO AVE 10',
                    'NEW BRIDGE RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "CT8",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "CT8",
                destination: "> ANG MO KIO AVE 9",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'EU TONG SEN ST',
                    'ANG MO KIO AVE 10',
                    'ANG MO KIO AVE 3',
                    'ANG MO KIO AVE 4'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "CT8",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    815: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "CT18",
                destination: "> KAMPONG BAHRU TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'BEDOK NORTH AVE 3',
                    'BEDOK RESERVOIR RD',
                    'JALAN EUNOS',
                    'NEW BRIDGE RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "CT18",
                font: "LECIP-20:6",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "CT18",
                destination: "> BEDOK NORTH AVE 3",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'EU TONG SEN ST',
                    'JALAN EUNOS',
                    'BEDOK RESERVOIR RD',
                    'BEDOK NORTH AVE 3'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "CT18", 
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    "815N": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "CT18",
                destination: "> NEW BRIDGE RD TER",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'BEDOK NORTH AVE 3',
                    'BEDOK RESERVOIR RD',
                    'JALAN EUNOS',
                    'NEW BRIDGE RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "CT18",
                font: "LECIP-20:6",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "CT18",
                destination: "> BEDOK NORTH AVE 3",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'EU TONG SEN ST',
                    'JALAN EUNOS',
                    'BEDOK RESERVOIR RD',
                    'BEDOK NORTH AVE 3'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "CT18", 
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    816: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "CT28",
                destination: "> NEW BRIDGE RD",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "CLEMENTI AVE 4",
                    "C'WEALTH AVE WEST",
                    "NEW BRIDGE RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "CT28",
                font: "LECIP-20:6",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "CT28",
                destination: "> CLEMENTI AVE 4",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "EU TONG SEN ST",
                    "C'WEALTH AVE WEST",
                    "CLEMENTI AVE 4"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "CT28",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    "850E": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "850E",
                destination: "> SHENTON WAY",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "YISHUN RING RD",
                    "BRAS BASAH RD",
                    "COLLYER QUAY",
                    "RAFFLES QUAY",
                    "SHENTON WAY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "850E",
                font: "LECIP-20:6",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "850E",
                destination: "> YISHUN RING RD",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "ROBINSON RD",
                    "FULLERTON RD",
                    "STAMFORD RD",
                    "PENANG RD",
                    "YISHUN RING RD"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "850E",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    851: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "851",
                destination: "> BUKIT MERAH INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'YISHUN AVE 2',
                    'LENTOR AVE',
                    'ANG MO KIO AVE 6',
                    'ANG MO KIO AVE 5',
                    'MARYMOUNT RD',
                    'THOMSON RD',
                    'VICTORIA ST',
                    'NEW BRIDGE RD',
                    'TIONG BAHRU RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "851",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "851",
                destination: "> YISHUN INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "TIONG BAHRU RD",
                    'EU TONG SEN ST',
                    "VICTORIA ST",
                    "THOMSON RD",
                    "MARYMOUNT RD",
                    "ANG MO KIO AVE 5",
                    "ANG MO KIO AVE 6",
                    "LENTOR AVE",
                    "YISHUN AVE 2"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "851",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "851C": {
        1: {
            front: {
                renderType: "ChingaystandardService",
                serviceNumber: "851",
                destination: "> BUKIT MERAH INT",
                destinationFont: "Hanover-10",
                scrolls: [
                    {
                        renderType: "destScroll",
                        top: " ~",
                        topFont: "LECIP-20:12",
                                    
                        serviceNumber: "851"
                    },
                    'YISHUN AVE 2',
                    'LENTOR AVE',
                    'ANG MO KIO AVE 6',
                    'ANG MO KIO AVE 5',
                    'MARYMOUNT RD',
                    'THOMSON RD',
                    'VICTORIA ST',
                    'NEW BRIDGE RD',
                    'TIONG BAHRU RD'
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "851",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "ChingaystandardService",
                serviceNumber: "851",
                destination: "> YISHUN INT",
                destinationFont: "Hanover-10",
                scrolls: [
                    {
                        renderType: "destScroll",
                        top: " ~",
                        topFont: "LECIP-20:12",
                                    
                        serviceNumber: "851"
                    },
                    "TIONG BAHRU RD",
                    'EU TONG SEN ST',
                    "VICTORIA ST",
                    "THOMSON RD",
                    "MARYMOUNT RD",
                    "ANG MO KIO AVE 5",
                    "ANG MO KIO AVE 6",
                    "LENTOR AVE",
                    "YISHUN AVE 2"
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "851",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "851E": {
        1: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "851e",
                image: "express",
                destination: "EXPRESS 851e"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "851e",
                font: "LECIP-20:6",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "logoSvc",
                serviceNumber: "851e",
                image: "fastForward",
                destination: "FFW 851e"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "851e",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    852: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "852",
                destination: "> BUKIT BATOK INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "YISHUN AVE 2",
                    "LENTOR AVE",
                    "ANG MO KIO AVE 6",
                    "LORNIE RD",
                    "BUKIT TIMAH RD",
                    "UPP BUKIT TIMAH RD",
                    "BUKIT BATOK E. AVE 6"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "852",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "852",
                destination: "> YISHUN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "BUKIT BATOK E. AVE 6",
                    "UPP BUKIT TIMAH RD",
                    "DUNEARN RD",
                    "LORNIE RD",
                    "MARYMOUNT RD",
                    "ANG MO KIO AVE 6",
                    "LENTOR AVE",
                    "YISHUN AVE 2"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "852",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    860: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "860",
                destination: "> YISHUN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                    "UPPER THOMSON RD",
                    "ANG MO KIO AVE 5",
                    "YISHUN RING RD",
                    "YISHUN AVE 3"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "860",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "860",
                destination: "> YIO CHU KANG INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "YISHUN RING RD",
                    "UPPER THOMSON RD",
                    "SEMBAWANG RD",
                    "YISHUN AVE 3"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "860",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "860T": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "860T",
                destination: "YISHUN INT",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "860T",
                    landmark: "YISHUN INT"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "860T",
                font: "LECIP-20:6",
                spacing: 2
        }
    },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "860T",
                destination: "YIO CHU KANG INT",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "860T",
                    landmark: "YI0 CHU KANG INT"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "860T",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    888: {
        1: {
            front: {
                renderType: "message",
                text: "AIRPORT  888  STATION",
                font: "LECIP-20:6",
                spacing: 1
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "888",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    900: {
        1: {
            front: {
                renderType: "message",
                text: "EMPLOYEE BUS",
                font: "LECIP-20:9",
                spacing: 3
            },
            rear: {
                renderType: 'twoline',
                top: "EMP.",
                topFont: "LECIP-7:4",

                bottom: "BUS",
                bottomFont: "LECIP-7:4"
            }
        },
        2: {
            front: {
                renderType: "message",
                text: "STAFF",
                font: "LECIP-20:12",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "STAFF",
                font: "LECIP-7:4",
                spacing: 1
            }
        }
    },
    901: {
        1: {
            front: {
                renderType: "message",
                text: "EB 1",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB1",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    902: {
        1: {
            front: {
                renderType: "message",
                text: "EB 2",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB2",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    903: {
        1: {
            front: {
                renderType: "message",
                text: "EB 3",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB3",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    904: {
        1: {
            front: {
                renderType: "message",
                text: "EB 4",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB4",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    905: {
        1: {
            front: {
                renderType: "message",
                text: "EB 5",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB5",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    906: {
        1: {
            front: {
                renderType: "message",
                text: "EB 6",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB6",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    907: {
        1: {
            front: {
                renderType: "message",
                text: "EB 7",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB7",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    908: {
        1: {
            front: {
                renderType: "message",
                text: "EB 8",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB8",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    909: {
        1: {
            front: {
                renderType: "message",
                text: "EB 9",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB9",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    910: {
        1: {
            front: {
                renderType: "message",
                text: "EB 10",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB10",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    911: {
        1: {
            front: {
                renderType: "message",
                text: "EB 11",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB11",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    912: {
        1: {
            front: {
                renderType: "message",
                text: "EB 12",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB12",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    913: {
        1: {
            front: {
                renderType: "message",
                text: "EB 13",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB13",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    914: {
        1: {
            front: {
                renderType: "message",
                text: "EB 14",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB14",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "914A": {
        1: {
            front: {
                renderType: "message",
                text: "EB 14A",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB14A",
                font: "LECIP-20:6",
                spacing: 1
            }
        }
    },
    915: {
        1: {
            front: {
                renderType: "message",
                text: "EB 15",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB15",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    916: {
        1: {
            front: {
                renderType: "message",
                text: "EB 16",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB16",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    917: {
        1: {
            front: {
                renderType: "message",
                text: "EB 17",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB17",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    918: {
        1: {
            front: {
                renderType: "message",
                text: "EB 18",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB18",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    919: {
        1: {
            front: {
                renderType: "message",
                text: "EB 19",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB19",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    920: {
        1: {
            front: {
                renderType: "message",
                text: "EB 20",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB20",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    921: {
        1: {
            front: {
                renderType: "message",
                text: "EB 21",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB21",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    922: {
        1: {
            front: {
                renderType: "message",
                text: "EB 22",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB22",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    923: {
        1: {
            front: {
                renderType: "message",
                text: "EB 23",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB23",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    924: {
        1: {
            front: {
                renderType: "message",
                text: "EB 24",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB24",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    925: {
        1: {
            front: {
                renderType: "message",
                text: "EB 25",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB25",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    926: {
        1: {
            front: {
                renderType: "message",
                text: "EB 26",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB26",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    927: {
        1: {
            front: {
                renderType: "message",
                text: "EB 27",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB27",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    928: {
        1: {
            front: {
                renderType: "message",
                text: "EB 28",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB28",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    929: {
        1: {
            front: {
                renderType: "message",
                text: "EB 29",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB29",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    930: {
        1: {
            front: {
                renderType: "message",
                text: "EB 30",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB30",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    931: {
        1: {
            front: {
                renderType: "message",
                text: "EB 31",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB31",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    932: {
        1: {
            front: {
                renderType: "message",
                text: "EB 32",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB32",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    933: {
        1: {
            front: {
                renderType: "message",
                text: "EB 33",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB33",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    934: {
        1: {
            front: {
                renderType: "message",
                text: "EB 34",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB34",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    938: {
        1: {
            front: {
                renderType: "message",
                text: "EB 38",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB38",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    943: {
        1: {
            front: {
                renderType: "message",
                text: "EB 43",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB43",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    944: {
        1: {
            front: {
                renderType: "message",
                text: "EB 44",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB44",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    945: {
        1: {
            front: {
                renderType: "message",
                text: "EB 45",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB45",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    946: {
        1: {
            front: {
                renderType: "message",
                text: "EB 46",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB46",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    947: {
        1: {
            front: {
                renderType: "message",
                text: "EB 47",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB47",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    948: {
        1: {
            front: {
                renderType: "message",
                text: "EB 48",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB48",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    949: {
        1: {
            front: {
                renderType: "message",
                text: "EB 49",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB49",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    950: {
        1: {
            front: {
                renderType: "message",
                text: "EB 50",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB50",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    951: {
        1: {
            front: {
                renderType: "message",
                text: "EB 51",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB51",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    952: {
        1: {
            front: {
                renderType: "message",
                text: "EB 52",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB52",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    953: {
        1: {
            front: {
                renderType: "message",
                text: "EB 53",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB53",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    954: {
        1: {
            front: {
                renderType: "message",
                text: "EB 54",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB54",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    955: {
        1: {
            front: {
                renderType: "message",
                text: "EB 55",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB55",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    961: {
        1: {
            front: {
                renderType: "message",
                text: "EB 61",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB61",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    962: {
        1: {
            front: {
                renderType: "message",
                text: "EB 62",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB62",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    963: {
        1: {
            front: {
                renderType: "message",
                text: "EB 63",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB63",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    964: {
        1: {
            front: {
                renderType: "message",
                text: "EB 64",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB64",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    974: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "974",
                destination: "> BUKIT PANJANG STN",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'UPPER JURONG RD',
                    'JURONG WEST ST 63',
                    'JALAN BOON LAY',
                    'CHOA CHU KANG WAY'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "974",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "974",
                destination: "> JOO KOON INT",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    'CHOA CHU KANG WAY',
                    'JALAN BOON LAY',
                    'JURONG WEST ST 63',
                    'UPPER JURONG RD'
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "974",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    "974A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "974A",
                destination: "CHOA CHU KANG STN",
                destinationFont: "LECIP-10",
                scrolls: [
                {
                    renderType: "swt",
                    serviceNumber: "974A",
                    landmark: "CCK AVE 4 (LOT 1/CCK STN)"
                },
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "974A",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    "974U": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "974",
                destination: "JOO KOON INT-UPP BT TIMAH",
                destinationFont: "LECIP-6:4",
                scrolls: [
                    "UPPER JURONG RD",
                    "JURONG WEST ST 63",
                    "JALAN BOON LAY",
                    "CHOA CHU KANG WAY"
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "974",
                font: "LECIP-20:9",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "974",
                destination: "> BUKIT TIMAH STN",
                destinationFont: "LECIP-7:5",
                scrolls: [
                    "UPPER JURONG RD",
                    "JURONG WEST ST 63",
                    "JALAN BOON LAY",
                    "CHOA CHU KANG WAY"
                ],
                scrollFont: "LECIP-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "974",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    977: {
        1: {
            front: {
                renderType: "message",
                text: "EB 77",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB77",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    978: {
        1: {
            front: {
                renderType: "message",
                text: "EB 77",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB77",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    980: {
        1: {
            front: {
                renderType: "message",
                text: "EB 80",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB80",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    981: {
        1: {
            front: {
                renderType: "message",
                text: "EB 81",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB81",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    982: {
        1: {
            front: {
                renderType: "message",
                text: "EB 82",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB82",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    983: {
        1: {
            front: {
                renderType: "message",
                text: "EB 83",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB83",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    984: {
        1: {
            front: {
                renderType: "message",
                text: "EB 84",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB84",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    985: {
        1: {
            front: {
                renderType: "message",
                text: "EB 85",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB85",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    986: {
        1: {
            front: {
                renderType: "message",
                text: "EB 86",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB86",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    987: {
        1: {
            front: {
                renderType: "message",
                text: "EB 87",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB87",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    988: {
        1: {
            front: {
                renderType: "message",
                text: "EB 88",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB88",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    989: {
        1: {
            front: {
                renderType: "message",
                text: "EB 89",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB89",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    991: {
        1: {
            front: {
                renderType: "message",
                text: "EB 91",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB91",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    992: {
        1: {
            front: {
                renderType: "message",
                text: "EB 92",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB92",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    993: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "993",
                destination: "JURONG E. INT-BT BATOK W. AVE 8",
                destinationFont: "LECIP-6:3",
                scrolls: [
                    "BOON LAY WAY",
                    "JURONG TOWN HALL RD",
                    "BUKIT BATOK WEST AVE 8",
                    "BUKIT BATOK RD"
                ],
                scrollFont: "LECIP-6:3"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "993",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    995: {
        1: {
            front: {
                renderType: "message",
                text: "EB 95",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB95",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    996: {
        1: {
            front: {
                renderType: "message",
                text: "EB 96",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB96",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    998: {
        1: {
            front: {
                renderType: "message",
                text: "EB 98",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB98",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    999: {
        1: {
            front: {
                renderType: "message",
                text: "EB 99",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB99",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    1110: {
        1: {
            front: {
                renderType: "message",
                text: "NTWU  COFFEE  BUS",
                font: "LECIP-20:9",
                spacing: 1
            },
            rear: {
                renderType: 'twoline',
                top: "COFFEE",
                topFont: "LECIP-7:4",

                bottom: "BUS",
                bottomFont: "LECIP-7:4"
            }
        }
    },
    1111: {
        1: {
            front: {
                renderType: "message",
                text: "OFF SERVICE",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: 'twoline',
                top: "OFF",
                topFont: "LECIP-7:4",

                bottom: "SERVICE",
                bottomFont: "LECIP-7:4"
            }
        },
        2: {
            front: {
                renderType: "message",
                text: "CHARTERED",
                font: "LECIP-20:12",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "ON",
                topFont: "LECIP-6:3",

                bottom: "CHARTER",
                bottomFont: "LECIP-6:3"
            }
        }
    },
    2222: {
        1: {
            front: {
                renderType: "logo",
                text: "SBS Transit",
                image: "SBST-logo"
            },
            rear: {
                renderType: 'twoline',
                top: "SBS",
                topFont: "LECIP-7:4",

                bottom: "TRANSIT",
                bottomFont: "LECIP-7:4"
            }
        },
        2: {
            front: {
                renderType: "message",
                text: "SBS TRANSIT",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "SBS",
                topFont: "LECIP-7:4",

                bottom: "TRANSIT",
                bottomFont: "LECIP-7:4"
            }
        }
    },
    3333: {
        1: {
            front: {
                renderType: "message",
                text: "FREE SHUTTLE",
                font: "LECIP-20:12",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "FREE",
                topFont: "LECIP-7:4", // check font

                bottom: "SHUTTLE",
                bottomFont: "LECIP-7:4"
            }
        }
    },
    4071: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "S7",
                destination: "TAMPINES - TANAH MERAH",
                destinationFont: "LECIP-6:4",
                scrolls: [{
                    renderType: "destScroll2",
                    top: "SHUTTLE 7",
                    topFont: "LECIP-9:7",
                    bottom: "TAMPINES -TANAH MERAH",
                    bottomFont: "LECIPBold-7:6",
                                
                    serviceNumber: "S7",
                    serviceFont: "LECIP-20:11",
                    serviceSpacing: "",
                    },
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "S7",
                font: "LECIP-20:11",
                spacing: 2
            }
        }
    },
    4072: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "S7",
                destination: "TANAH MERAH - TAMPINES",
                destinationFont: "LECIP-6:4",
                scrolls: [{
                    renderType: "destScroll2",
                    top: "SHUTTLE 7",
                    topFont: "LECIP-9:7",
                    bottom: "TANAH MERAH - TAMPINES",
                    bottomFont: "LECIPBold-7:6",
                                
                    serviceNumber: "S7",
                    serviceFont: "LECIP-20:11",
                    serviceSpacing: "",
                    },
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "S7",
                font: "LECIP-20:11",
                spacing: 2
            }
        }
    },
    4361: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "S36",
                destination: "BISHAN",
                destinationFont: "LECIP-6:4",
                scrolls: [
                {
                    renderType: "destScroll2A",
                    top: "SHUTTLE 36",
                    topFont: "LECIP-10",
                    bottom: "HARBOURFRONT - BISHAN",
                    bottomFont: "LECIP-7:5",
                                
                    serviceNumber: "S36",
                },
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "S36",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    4362: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "S36",
                destination: "HARBOURFRONT",
                destinationFont: "LECIP-6:4",
                scrolls: [
                {
                    renderType: "destScroll2A",
                    top: "SHUTTLE 36",
                    topFont: "LECIP-10",
                    bottom: "BISHAN - HARBOURFRONT",
                    bottomFont: "LECIP-7:5",
                                
                    serviceNumber: "S36",
                },
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "S36",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    4371: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "S37",
                destination: "BISHAN",
                destinationFont: "LECIP-6:4",
                scrolls: [
                {
                    renderType: "destScroll2A",
                    top: "SHUTTLE 37",
                    topFont: "LECIP-10",
                    bottom: "PROMENADE - BISHAN",
                    bottomFont: "LECIP-7:5",
                                
                    serviceNumber: "S37",
                },
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "S37",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    4372: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "S37",
                destination: "PROMENADE",
                destinationFont: "LECIP-6:4",
                scrolls: [
                {
                    renderType: "destScroll2A",
                    top: "SHUTTLE 37",
                    topFont: "LECIP-10",
                    bottom: "BISHAN - PROMENADE",
                    bottomFont: "LECIP-7:5",
                                
                    serviceNumber: "S37",
                },
                ],
                scrollFont: "LECIP-6:4"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "S37",
                font: "LECIP-20:9",
                spacing: 2
            }
        }
    },
    2223: {
        1: {
            front: {
                renderType: "message",
                text: "",
                font: "LECIP-24:Tower",
                spacing: 3
            },
            rear: {
                renderType: "message",
                text: "",
                font: "LECIP-24:Tower",
                spacing: 3
            }
        }
    },
    4444: {
        1: {
            front: {
                renderType: "message",
                text: "ON TEST",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: 'twoline',
                top: "ON",
                topFont: "LECIP-7:5",

                bottom: "TEST",
                bottomFont: "LECIP-7:5"
            }
        }
    },
    5555: {
        1: {
            front: {
                renderType: "message",
                text: "TRAINING BUS",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: 'twoline',
                top: "TRAINING",
                topFont: "LECIP-7:4",

                bottom: "BUS",
                bottomFont: "LECIP-7:4"
           }
        },
        2: {
            front: {
                renderType: "message",
                text: "TRAINING IN PROGRESS",
                font: "LECIP-10",
                spacing: 1
            },
            rear: {
                renderType: 'twoline',
                top: "TRG IN     ",
                topFont: "LECIP-6:3",

                bottom: "PROGRESS",
                bottomFont: "LECIP-6:3"
            }
        }
    },
    6000: {
        1: {
            front: {
                renderType: "message",
                text: "NEL BRIDGING BUS",
                font: "LECIP-14:6",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "NEL BRDG",
                topFont: "LECIP-6:3",

                bottom: "BUS",
                bottomFont: "LECIP-6:3"
            }
        }
    },
    6001: {
        1: {
            front: {
                renderType: "message",
                text: "DTL BRIDGING BUS",
                font: "LECIP-14:6",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "DTL BRDG",
                topFont: "LECIP-6:3",

                bottom: "BUS",
                bottomFont: "LECIP-6:3"
            }
        }
    },
    6002: {
        1: {
            front: {
                renderType: "message",
                text: "CCL BRIDGING BUS",
                font: "LECIP-14:6",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "CCL BRDG",
                topFont: "LECIP-6:3",

                bottom: "BUS",
                bottomFont: "LECIP-6:3"
            }
        }
    },
    6003: {
        1: {
            front: {
                renderType: "message",
                text: "EWL BRIDGING BUS",
                font: "LECIP-14:6",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "EWL BRDG",
                topFont: "LECIP-6:3",

                bottom: "BUS",
                bottomFont: "LECIP-6:3"
            }
        }
    },
    6004: {
        1: {
            front: {
                renderType: "message",
                text: "NSL BRIDGING BUS",
                font: "LECIP-14:6",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "NSL BRDG",
                topFont: "LECIP-6:3",

                bottom: "BUS",
                bottomFont: "LECIP-6:3"
            }
        }
    },
    6005: {
        1: {
            front: {
                renderType: "message",
                text: "TEL BRIDGING BUS",
                font: "LECIP-14:6",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "TEL BRDG",
                topFont: "LECIP-6:3",

                bottom: "BUS",
                bottomFont: "LECIP-6:3"
            }
        }
    },
    6006: {
        1: {
            front: {
                renderType: "message",
                text: "CRL BRIDGING BUS",
                font: "LECIP-14:6",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "CRL BRDG",
                topFont: "LECIP-6:3",

                bottom: "BUS",
                bottomFont: "LECIP-6:3"
            }
        }
    },
    6007: {
        1: {
            front: {
                renderType: "message",
                text: "JRL BRIDGING BUS",
                font: "LECIP-14:6",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "JRL BRDG",
                topFont: "LECIP-6:3",

                bottom: "BUS",
                bottomFont: "LECIP-6:3"
            }
        }
    },
    6099: {
        1: {
            front: {
                renderType: "message",
                text: "LRT BRIDGING BUS",
                font: "LECIP-14:6",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "LRT BRDG",
                topFont: "LECIP-6:3",

                bottom: "BUS",
                bottomFont: "LECIP-6:3"
            }
        }
    },
    6666: {
        1: {
            front: {
                renderType: "message",
                text: "BUS  REVERSING",
                font: "LECIP-20:12",
                spacing: 1
            },
            rear: {
                renderType: 'twoline',
                top: "REVER",
                topFont: "LECIP-6:3",

                bottom: "       SING",
                bottomFont: "LECIP-6:3"
            }
        }
    },
    7000: {
        1: {
            front: {
                renderType: "message",
                text: "LRT SHUTTLE EAST",
                font: "LECIP-14:6",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "LRT BRDG",
                topFont: "LECIP-6:3",

                bottom: "EAST",
                bottomFont: "LECIP-6:3"
            }
        },
        2: {
            front: {
                renderType: "message",
                text: "LRT SHUTTLE WEST",
                font: "LECIP-14:6",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "LRT BRDG",
                topFont: "LECIP-6:3",

                bottom: "WEST",
                bottomFont: "LECIP-6:3"
            }
        }
    },
    7001: {
        1: {
            front: {
                renderType: "message",
                text: "LRT SHUTTLE A",
                font: "LECIP-14:6",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "A",
                font: "LECIP-20:12",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "message",
                text: "LRT SHUTTLE B",
                font: "LECIP-14:6",
                spacing: 2
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "B",
                font: "LECIP-20:12",
                spacing: 2
            }
        }
    },
    7777: {
        1: {
            front: {
                renderType: "message",
                text: "FREE BRIDGING BUS",
                font: "LECIP-20:9",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "BRIDGING",
                topFont: "LECIP-6:3",

                bottom: "BUS",
                bottomFont: "LECIP-6:3"
            } // check
        }
    },
    8888: {
        1: {
            front: {
                renderType: "logo",
                text: "LECIP",
                image: "lecip"
            },
            rear: {
                renderType: "message",
                text: "LECIP",
                font: "LECIP-7:4",
                spacing: 2
            }
        }
    },
    9000: {
        1: {
            front: {
                renderType: "message",
                text: "HAPPY BUS",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: 'twoline',
                top: "HAPPY",
                topFont: "LECIP-7:4",

                bottom: "BUS",
                bottomFont: "LECIP-7:4"
            }
        }
    },
    9001: {
        1: {
            front: {
                renderType: "message",
                text: "ELECTRIC BUS",
                font: "LECIP-20:12",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "ELECTRIC",
                topFont: "LECIP-6:3",

                bottom: "BUS",
                bottomFont: "LECIP-6:3"
            }
        },
        2: {
            front: {
                renderType: "message",
                text: "HYBRID BUS",
                font: "LECIP-20:12",
                spacing: 2
            },
            rear: {
                renderType: 'twoline',
                top: "HYBRID",
                topFont: "LECIP-7:5",

                bottom: "BUS",
                bottomFont: "LECIP-7:5"
            }
        }
    },
    9704: {
        1: {
            front: {
                renderType: "message",
                text: "EB 704",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB704",
                font: "LECIP-7:5",
                spacing: 1
            }
        }
    },
    9707: {
        1: {
            front: {
                renderType: "message",
                text: "EB 707",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB707",
                font: "LECIP-7:5",
                spacing: 1
            }
        }
    },
    9715: {
        1: {
            front: {
                renderType: "message",
                text: "EB 715",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB715",
                font: "LECIP-7:5",
                spacing: 1
            }
        }
    },
    9721: {
        1: {
            front: {
                renderType: "message",
                text: "EB 721",
                font: "LECIP-20:12",
                spacing: 3
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "EB721",
                font: "LECIP-7:5",
                spacing: 1
            }
        }
    },
    9999: {
        1: {
            front: {
                renderType: "message",
                text: "VER. 09JUN19-DD",
                font: "LECIP-14:6",
                spacing: 1
            },
            rear: {
                renderType: 'twoline',
                top: "VER. 09",
                topFont: "LECIP-6:3",

                bottom: "JUN19-DD",
                bottomFont: "LECIP-6:3"
            }
        },
        2: {
            front: {
                renderType: "message",
                text: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                font: "LECIP-20:12",
                spacing: 1
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                font: "LECIP-20:12",
                spacing: 1
            }
        }
    }
}

EDSImages.SBST = {
    "SBST-logo": [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    express: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    fastForward: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]
    ],
    lecip: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    FlagTheBus: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0],
        [0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0],
        [1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
        [0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
        [0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    ],
    chingay: [
        [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0],
        [1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
    ]
}
