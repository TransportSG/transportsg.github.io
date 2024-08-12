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
                    "$serviceFont === null": "LECIP-19:TowerB9Front",
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
    standardService2: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: {
                $$cond: {
                    "$serviceFont === null": "LECIP-19:TowerB9Front",
                    "else": "$serviceFont"
                }
            },
            spacing: 3
        },
        destination: {
            align: "centre-x,top",
            margin: {
                right: 'width(serviceNumber)',
                Top: 1
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
    TowerSpecialEDS: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "LECIP-19:TowerB9Front",
            spacing: 2
        },
        top: {
            align: {
                $$cond: {
                    "$bottom === null": "centre-x,centre-y",
                    "else": "centre-x,top"
                }
            },
            text: "$top",
            font: {
                $$cond: {
                    "$topFont === null": "Mobitec-9:6",
                    "else": "$topFont"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber) - width(image)'
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
                    "$bottomFont === null": "HMobitec-9:6",
                    "else": "$bottomFont"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber) - width(image)'
            }
        },
        image: {
            align: "left",
            image: {
                $$cond: {
                    "$image !== null": "$image",
                    "else": "blank"
                }
            }
        },

        text: "$text"
        
    },
    message2: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "LECIP-19:TowerB9Front",
            spacing: 3
        },
        top: {
            align: {
                $$cond: {
                    "$bottom === null": "centre-x,centre-y",
                    "else": "centre-x,top"
                }
            },
            text: "$top",
            font: {
                $$cond: {
                    "$topFont === null": "Mobitec-9:6",
                    "else": "$topFont"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber) - width(image)',
                top: 0
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
                    "$bottomFont === null": "Hanover-5:3",
                    "else": "$bottomFont"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber) - width(image)',
                bottom: 1
            }
        },
        image: {
            align: "left",
            image: {
                $$cond: {
                    "$image !== null": "$image",
                    "else": "blank"
                }
            }
        },

        text: "$top+' '+$bottom+' '+$serviceNumber"
    },
    message3: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "LECIP-19:TowerB9Front",
            spacing: 3
        },
        top: {
            align: {
                $$cond: {
                    "$bottom === null": "centre-x,centre-y",
                    "else": "centre-x,top"
                }
            },
            text: "$top",
            font: {
                $$cond: {
                    "$topFont === null": "Mobitec-9:6",
                    "else": "$topFont"
                }
            },
            spacing: 2,
            margin: {
                right: 'width(serviceNumber) - width(image)',
                top: 1
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
                    "$bottomFont === null": "Hanover-5:3",
                    "else": "$bottomFont"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber) - width(image)',
                bottom: 1
            }
        },
        image: {
            align: "left",
            image: {
                $$cond: {
                    "$image !== null": "$image",
                    "else": "blank"
                }
            }
        },

        text: "$top+' '+$bottom+' '+$serviceNumber"
        
    },
    message4: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "LECIP-19:TowerB9Front",
            spacing: 3
        },
        top: {
            align: {
                $$cond: {
                    "$bottom === null": "centre-x,centre-y",
                    "else": "centre-x,top"
                }
            },
            text: "$top",
            font: {
                $$cond: {
                    "$topFont === null": "Mobitec-9:6",
                    "else": "$topFont"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber) - width(image)',
                top: 0
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
                    "$bottomFont === null": "Hanover-5:3",
                    "else": "$bottomFont"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber) - width(image)',
                bottom: 0
            }
        },
        image: {
            align: "left",
            image: {
                $$cond: {
                    "$image !== null": "$image",
                    "else": "blank"
                }
            }
        },

        text: "$top+' '+$bottom+' '+$serviceNumber"
    },
    destScrollWithImage: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "LECIP-19:TowerB9Front",
            spacing: 3
        },
        top: {
            align: {
                $$cond: {
                    "$bottom === null": "centre-x,centre-y",
                    "else": "centre-x,top"
                }
            },
            text: "$top",
            font: {
                $$cond: {
                    "$topFont === null": "Hanover-Tower11:7",
                    "else": "$topFont"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber) - width(image)'
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
                    "$bottomFont === null": "LECIP-7:5",
                    "else": "$bottomFont"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber) - width(image)'
            }
        },
        image: {
            align: "left",
            image: {
                $$cond: {
                    "$image !== null": "$image",
                    "else": "blank"
                }
            }
        },

        text: "$top+' '+$bottom+' '+$serviceNumber"
    },
    twolinerear: {
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
    twolinerear2: {
        top: {
            align: "centre-x,top",
            text: "$top",
            font: "$topFont",
            spacing: "$topSpacing",
            margin: {
                top: 2
            }
        },
        bottom: {
            align: "centre-x,bottom",
            text: "$bottom",
            font: "$bottomFont",
            spacing: "$bottomSpacing",
            margin: {
                bottom: 2
            }
        },
        text: "$top"
    },
    twolinefront: {
        top: {
            align: "centre-x,top",
            text: "$top",
            font: "$topFont",
            spacing: "$topSpacing",
            margin: {
                top: 0
            }
        },
        bottom: {
            align: "centre-x,bottom",
            text: "$bottom",
            font: "$bottomFont",
            spacing: "$bottomSpacing",
            margin: {
                bottom: 0
            }
        },
        text: "$top"
    },
    destScroll: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "LECIP-19:TowerB9Front",
            spacing: {
                $$cond: {
                    "$spacing === null" : 3,
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
                    "else": "LECIP-10"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber)'
            }
        },

        text: "$top+' '+$bottom+' '+$serviceNumber"
    },
    standardServiceWithLeftImage: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 1
            },
            text: "$serviceNumber",
            font: "LECIP-19:TowerB9Front",
            spacing: 2
        },
        top: {
            align: "centre-x,top",
            margin: {
                right: 'width(serviceNumber) - width(image)',
                Top: 1
            },
            text: "$destination",
            font: "$topFont",
            spacing: 1
        },
        bottom: {
            align: "centre-x,bottom",
            text: {
                $$cond: {
                    "$bottom !== null": "$bottom",
                    "else": "$topFont"
                }
            },
            font: {
                $$cond: {
                    "$bottomFont === null": "LECIP-7:5",
                    "else": "$bottomFont"
                }
            },
            spacing: 1,
            margin: {
                right: 'width(serviceNumber) - width(image)'
            }
        },
        image: {
            align: "left,centre-y",
            image: {
                $$cond: {
                    "$image !== null": "$image",
                    "else": "blank"
                }
            }
        },

        text: "$top+' '+$bottom+' '+$serviceNumber"
    },
    logo: {
        logo: {
            align: "centre-x,centre-y",
            image: "$image"
        },

        text: "$text"
    },
    full: {
        __dynamic__: (matrix, data) => {
            matrixPrimitives.setStrokeColour(null);
            matrixPrimitives.fillRectangle(matrix, 0, 0, matrix.width, matrix.height);
        },
        text: "FULL"
    },
    'centreMessageServiceScroll': {
        serviceNumber: {
            align: 'right,centre-y',
            margin: {
                right: 1
            },
            text: '$serviceNumber',
            font: 'LECIP-19:TowerB9Front',
            spacing: 3
        },
        top: {
            align: 'centre-x,top',
            margin: {
                right: 'width(serviceNumber) len(5)',
                top: 0
            },
            text: '$top',
            font: '$topFont',
            spacing: 1
        },
        bottom: {
            align: 'centre-x,bottom',
            margin: {
                right: 'width(serviceNumber) len(5)',
                bottom: 1
            },
            text: '$bottom',
            font: '$bottomFont',
            spacing: 1
        }
    },
    'centreMessageServiceScroll2': {
        serviceNumber: {
            align: 'right,centre-y',
            margin: {
                right: 1
            },
            text: '$serviceNumber',
            font: 'LECIP-19:TowerB9Front',
            spacing: 3
        },
        top: {
            align: 'centre-x,top',
            margin: {
                right: 'width(serviceNumber) len(5)',
                top: 0
            },
            text: '$top',
            font: '$topFont',
            spacing: 1
        }
    },
    '944to992': {
        serviceNumber: {
            align: 'right,centre-y',
            margin: {
                right: 1
            },
            text: '$serviceNumber',
            font: 'LECIP-19:TowerB9Front',
            spacing: 3
        },
        top: {
            align: 'centre-x,top',
            margin: {
                right: 'width(serviceNumber) len(5)',
                top: 2
            },
            text: '$top',
            font: '$topFont',
            spacing: 1
        },
        bottom: {
            align: 'centre-x,bottom',
            margin: {
                right: 'width(serviceNumber) len(5)',
                bottom: 1
            },
            text: '$bottom',
            font: '$bottomFont',
            spacing: 1
        }
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
    41: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "41",
                destination: "BEAUTY WORLD MRT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "TOH GUAN RD",
                    "TOH GUAN RD EAST",
                    "TOH TUCK RD",   
                {
                    renderType: "destScroll",
                    top: "BEAUTY WORLD MRT",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "41"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "41",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "41",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "TOH TUCK RD",
                    "TOH GUAN RD EAST",
                    "TOH GUAN RD", 
                {
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "41"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "41",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },   
    "41J": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "41",
                destination: "JALAN ANAK BUKIT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "TOH GUAN RD",
                    "TOH GUAN RD EAST",
                    "TOH TUCK RD",   
                {
                    renderType: "destScroll",
                    top: "JALAN ANAK BUKIT",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "41"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "41",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "41",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "TOH TUCK RD",
                    "TOH GUAN RD EAST",
                    "TOH GUAN RD", 
                {
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "41"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "41",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    49: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "49",
                destination: "JURONG WEST ST 42",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "JURONG TOWN HALL RD",
                    "JALAN AHMAD IBRAHIM",
                    "CORPORATION DR",
                    "LAKESIDE MRT",
                    "JURONG WEST ST 51",   
                {
                    renderType: "destScroll",
                    top: "JURONG  WEST  ST  42",
                    topFont: "Hanover-14:6",
    
                    serviceNumber: "49"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "49",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "49",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "JURONG WEST ST 51",
                    "LAKESIDE MRT",
                    "CORPORATION DR",
                    "YUAN CHING RD",
                    "JALAN AHMAD IBRAHIM",
                    "BOON LAY WAY", 
                {
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "49"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "49",
                font: "LECIP-TowerRear17:10",
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
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "logo",
                    text: "Chingay 50 Logo",
                    image: "Chingay50Logo2"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "CHINGAY 50 LOGO",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "logo",
                    text: "Chingay 50 Logo",
                    image: "Chingay50Logo3"
                    },
                    {
                    renderType: "twolinerear2",
                    top: "CHINGAY",
                    topFont: "LECIP-6:4",
                    bottom: "50",
                    bottomFont: "LECIP-7:5",
        
                        serviceNumber: ""
                    },
                ],
                scrollFont: "Hanover-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "CHINGAY 50 LOGO",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "logo",
                    text: "Chingay 50 Logo",
                    image: "Chingay50Logo1"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "CHINGAY 50 LOGO",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "logo",
                    text: "Chingay 50 Logo",
                    image: "Chingay50Logo3"
                    },
                    {
                    renderType: "twolinerear2",
                    top: "CHINGAY",
                    topFont: "LECIP-6:4",
                    bottom: "50",
                    bottomFont: "LECIP-7:5",
        
                        serviceNumber: ""
                    },
                ],
                scrollFont: "Hanover-7:5"
            }
        }
    },
    66: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "66",
                destination: "BEAUTY WORLD MRT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "JURONG TOWN HALL RD",
                    "BUKIT BATOK WEST AVE 8",
                    "BUKIT BATOK WEST AVE 6",
                    "JALAN JURONG KECHIL",   
                {
                    renderType: "destScroll",
                    top: "BEAUTY WORLD MRT",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "66"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "66",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "66",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "JALAN JURONG KECHIL",
                    "BUKIT BATOK WEST AVE 6",
                    "BUKIT BATOK WEST AVE 8",
                    "JURONG TOWN HALL RD", 
                {
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "66"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "66",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    "66A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "66A",
                destination: "LITTLE INDIA MRT",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message4",
                    serviceNumber: "66A",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "BUKIT TIMAH RD",
                    bottomFont: "Hanover-Tower8",
                    },
                    {
                    renderType: "message4",
                    serviceNumber: "66A",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "LITTLE INDIA STN EXIT A",
                    bottomFont: "Hanover-Tower7:5",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "66A",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    "66B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "66B",
                destination: "TEKKA CENTRE",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message4",
                    serviceNumber: "66B",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "TEKKA CTR",
                    bottomFont: "Hanover-Tower8",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "66B",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    "66C": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "66C",
                destination: "BEAUTY WORLD MRT",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message4",
                    serviceNumber: "66B",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "OPP BEAUTY WORLD STN",
                    bottomFont: "Hanover-Tower7:5",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "66C",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    "66K": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "66",
                destination: "BEDOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "BUKIT BATOK CENTRAL",
                    "DUNEARN RD",
                    "LITTLE INDIA",
                    "MACPHERSON RD / EST",
                    "BEDOK RESERVOIR RD",,   
                {
                    renderType: "destScroll",
                    top: "BEDOK",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "66"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "66",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "66",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "BEDOK RESERVOIR RD",
                    "MACPHERSON EST / RD",
                    "LITTLE INDIA",
                    "BUKIT TIMAH RD",
                    "BUKIT BATOK CENTRAL", 
                {
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "66"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "66",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    "66X": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "66",
                destination: "BEAUTY WORLD MRT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "JURONG TOWN HALL RD",
                    "BUKIT BATOK WEST AVE 8",
                    "BUKIT BATOK WEST AVE 6",
                    "JALAN JURONG KECHIL",   
                {
                    renderType: "destScroll",
                    top: "?",
                    topFont: "Hanover-Tower19:11",
        
                    serviceNumber: "66"
                },
                {
                    renderType: "destScroll",
                    top: "BEAUTY WORLD MRT",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "66"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "66",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "66",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "JALAN JURONG KECHIL",
                    "BUKIT BATOK WEST AVE 6",
                    "BUKIT BATOK WEST AVE 8",
                    "JURONG TOWN HALL RD", 
                {
                    renderType: "destScroll",
                    top: "?",
                    topFont: "Hanover-Tower19:11",
        
                    serviceNumber: "66"
                },    
                {
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "66"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "66",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    77: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "77",
                destination: "MARINA CENTRE",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "TOH TUCK RD",
                    "SIXTH AVE",
                    "HOLLAND VILLAGE / RD",
                    "ORCHARD RD",
                    "BRAS BASAH RD",   
                {
                    renderType: "destScroll",
                    top: "MARINA CENTRE",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "77"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "77",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "77",
                destination: "BUKIT BATOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "STAMFORD RD",
                    "ORCHARD BOULEVARD",
                    "HOLLAND RD / VILLAGE",
                    "SIXTH AVE",
                    "TOH TUCK RD", 
                {
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "77"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "77",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    "77F": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "77",
                destination: "STAMFORD RD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "TOH TUCK AVE",
                    "SIXTH AVE",
                    "HOLLAND VILLAGE / RD",
                    "ORCHARD RD",
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "77",
                    top: "SKIP",
                    topFont: "Hanover-Tower11:7",
    
                    bottom: "BRAS BASAH RD",
                    bottomFont: "Hanover-Tower7:5"
                },      
                {
                    renderType: "destScroll",
                    top: "STAMFORD RD",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "77"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "77",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "77",
                destination: "BUKIT BATOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "STAMFORD RD",
                    "ORCHARD BOULEVARD",
                    "HOLLAND RD / VILLAGE",
                    "SIXTH AVE",
                    "TOH TUCK RD", 
                {
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "77"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "77",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    78: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "78",
                destination: "CLEMENTI MRT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "PENJURU RD",
                    "TANJONG PENJURU",
                    "PANDAN RD / AVE",
                    "WEST COAST RD",
                {
                    renderType: "destScroll",
                    top: "CLEMENTI MRT",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "78"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "78",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "78",
                destination: "JURONG TOWN HALL",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "WEST COAST RD",
                    "PANDAN RD",
                    "TANJONG PENJURU",
                    "PENJURU RD",,
                {
                    renderType: "destScroll",
                    top: "JURONG TOWN HALL",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "78"
                },
                    ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "78",
                font: "LECIP-TowerRear17:10",
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
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message4",
                    serviceNumber: "78A",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "TANJONG PENJURU",
                    bottomFont: "Hanover-Tower8",
                    },
                    {
                    renderType: "message4",
                    serviceNumber: "78A",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "OPP CLP INTL",
                    bottomFont: "Hanover-Tower8",
                        },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "78A",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    "78J": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "78",
                destination: "CLEMENTI MRT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "PENJURU RD",
                    "TANJONG PENJURU",
                    "PANDAN RD / AVE",
                    "WEST COAST RD",
                {
                    renderType: "destScroll",
                    top: "CLEMENTI MRT",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "78"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "78",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "78",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "WEST COAST RD",
                    "PANDAN RD",
                    "TANJONG PENJURU",
                    "PENJURU RD",,
                {
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "78"
                },
                    ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "78",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    79: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "79",
                destination: "BOON LAY",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [    
                    {
                        renderType: "destScrollWithImage",
                        serviceNumber: "79",
                        top: "`",
                        topFont: "Mobitec-Tower11:4",
                        bottom: "~",
                        bottomFont: "Mobitec-Tower11:4",
                    },                
                    "TEBAN GARDENS RD",
                    "JURONG PORT RD",
                    "THIRD CHIN BEE RD",
                    "QUALITY RD",
                {
                    renderType: "destScroll",
                    top: "BOON LAY",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "79"
                },
                    ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "79",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "79",
                destination: "JURONG TOWN HALL",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [     
                    {
                        renderType: "destScrollWithImage",
                        serviceNumber: "79",
                        top: "extend to jurong town hall int",
                        topFont: "Mobitec-Tower11:4",
                        bottom: "~",
                        bottomFont: "Mobitec-Tower11:4",
                    },               
                    "QUALITY RD",
                    "THIRD CHIN BEE RD",
                    "JURONG PORT RD",
                    "TEBAN GARDENS RD",
                {
                    renderType: "destScroll",
                    top: "JURONG TOWN HALL",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "79"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "79",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    "79A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "79A",
                destination: "JURONG TOWN HALL RD",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message4",
                    serviceNumber: "79A",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "JURONG TOWN HALL RD",
                    bottomFont: "Hanover-Tower8",
                    },
                    {
                    renderType: "message4",
                    serviceNumber: "79A",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "JURONG EAST LIB",
                    bottomFont: "Hanover-Tower8",
                        },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "79A",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "79A",
                destination: "BOON LAY INT",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message4",
                    serviceNumber: "79A",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "BOON LAY INT",
                    bottomFont: "Hanover-Tower8",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "79A",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    "79J": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "79",
                destination: "JURONG EAST MRT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "QUALITY RD",
                    "THIRD CHIN BEE RD",
                    "JURONG PORT RD",
                    "TEBAN GARDENS RD",
                {
                    renderType: "destScroll",
                    top: "JURONG EAST MRT",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "79"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "79",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "79",
                destination: "BOON LAY",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "TEBAN GARDENS RD",
                    "JURONG PORT RD",
                    "THIRD CHIN BEE RD",
                    "QUALITY RD",
                {
                    renderType: "destScroll",
                    top: "BOON LAY",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "79"
                },
                    ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "79",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    "79T": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "79T",
                destination: "BOON LAY INT",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message4",
                    serviceNumber: "79T",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "BOON LAY INT",
                    bottomFont: "Hanover-Tower8",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "79T",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    96: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "96",
                destination: "CLEMENTI",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "CLEMENTI RD",
                    "NAT'L UNIVERSITY OF S'PORE",
                    "KENT RIDGE CRESCENT",

                {
                    renderType: "destScroll",
                    top: "CLEMENTI - NUS",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "96"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "96",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    "96A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "96A",
                destination: "KENT RIDGE CRESCENT",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message4",
                    serviceNumber: "96A",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "KENT RIDGE CRES",
                    bottomFont: "Hanover-Tower8",
                    },
                    {
                    renderType: "message4",
                    serviceNumber: "96A",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "NUS RAFFLES HALL",
                    bottomFont: "Hanover-Tower8",
                        },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "96A",
                font: "LECIP-TowerRear17:7",
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
                destinationFont: "Hanover-10",
                scrolls: [
                    {
                    renderType: "message4",
                    serviceNumber: "96B",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "CLEMENTI STN EXIT A",
                    bottomFont: "Hanover-Tower8",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "96B",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    97: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "97",
                destination: "MARINA CENTRE",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "A Y E",
                    "ALEXANDRA RD",
                    "HARBOURFRONT",
                    "ROBINSON RD",
                    "BAYFRONT AVE / MBS",
                {
                    renderType: "destScroll",
                    top: "MARINA CENTRE",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "97"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "97",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "97",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "BAYFRONT AVE / MBS",
                    "SHENTON WAY",
                    "HARBOURFRONT",
                    "ALEXANDRA RD",
                    "A Y E",
                {
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "97"
                },
                    ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "97",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    "97E": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "97e",
                destination: "MARINA CENTRE",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "A Y E",
                    "ALEXANDRA RD",
                    "HARBOURFRONT",
                    "ROBINSON RD",
                    "BAYFRONT AVE / MBS",
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "97e",
                    top: "LIMITED STOPS",
                    topFont: "Hanover-Tower11:7",

                    bottom: "EXPRESS SERVICE",
                    bottomFont: "Hanover-Tower7:5"
                },
                {
                    renderType: "destScroll",
                    top: "MARINA CENTRE",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "97e"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "97e",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "97e",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "BAYFRONT AVE / MBS",
                    "SHENTON WAY",
                    "HARBOURFRONT",
                    "ALEXANDRA RD",
                    "A Y E",
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "97e",
                    top: "LIMITED STOPS",
                    topFont: "Hanover-Tower11:7",

                    bottom: "EXPRESS SERVICE",
                    bottomFont: "Hanover-Tower7:5"
                },
                {
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "97e"
                },
                    ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "97e",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    "97F": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "97",
                destination: "CENTRAL BOULEVARD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "A Y E",
                    "ALEXANDRA RD",
                    "HARBOURFRONT",
                    "ROBINSON RD",
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "97",
                    top: "SKIP",
                    topFont: "Hanover-Tower11:7",
    
                    bottom: "MBS / SUNTEC",
                    bottomFont: "Hanover-Tower7:5"
                },          
                {
                    renderType: "destScroll",
                    top: "CENTRAL  BOULEVARD",
                    topFont: "Hanover-14:6",
    
                    serviceNumber: "97"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "97",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "97",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "SHENTON WAY",
                    "HARBOURFRONT",
                    "ALEXANDRA RD",
                    "A Y E",      
                {
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "97"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "97",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    98: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "98",
                destination: "JURONG PIER WAY",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "JURONG EAST AVE 1",
                    'JURONG WEST AVE 1',
                    "LAKESIDE MRT",
                    "CORPORATION DR",
                    "JURONG PORT RD",
                    "JALAN BUROH",         
                {
                    renderType: "destScroll",
                    top: "JUORNG PIER WAY",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "98"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "twolinerear",
                top: "98",
                topFont: "LECIP-TowerRear10:7",
                topSpacing: 2,

                bottom: "JUR. PIER",
                bottomFont: "Hanover-5:3",
                bottomSpacing: 1,
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "98",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "JURONG PORT RD",
                    "CORPORATION DR",
                    "LAKESIDE MRT",
                    "JURONG WEST AVE 1",
                    "JURONG EAST AVE 1",
                {
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "98"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "twolinerear",
                top: "98",
                topFont: "LECIP-TowerRear10:7",
                topSpacing: 2,

                bottom: "JUR`EAST",
                bottomFont: "Hanover-5:3",
                bottomSpacing: 1,
            }
        }
    },
    "98A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "98A",
                destination: "CORPORATION RD",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message4",
                    serviceNumber: "98A",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "CORPORATION RD",
                    bottomFont: "Hanover-Tower8",
                    },
                    {
                    renderType: "message4",
                    serviceNumber: "98A",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "CORPORATION PL",
                    bottomFont: "Hanover-Tower8",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "98A",
                font: "LECIP-TowerRear17:7",
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
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message4",
                    serviceNumber: "98B",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "JURONG PIER WAY",
                    bottomFont: "Hanover-Tower8",
                    },
                    {
                    renderType: "message4",
                    serviceNumber: "98B",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "JURONG ISLAND CHECKPT",
                    bottomFont: "Hanover-Tower8",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "98B",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    "98M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "98M",
                destination: "CORPORATION RD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "JURONG EAST AVE 1",
                    'JURONG WEST AVE 1',
                    "LAKESIDE MRT",
                    "CORPORATION DR",         
                {
                    renderType: "destScroll",
                    top: "CORPORATION RD",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "98M"
                },
                {
                    renderType: "message4",
                    serviceNumber: "98M",
                    top: "LOOPS AT",
                    topFont: "Hanover-8",

                    bottom: "CORPORATION RD",
                    bottomFont: "Hanover-Tower11:7"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "98M",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "98M",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "CORPORATION DR",
                    "LAKESIDE MRT",
                    "JURONG WEST AVE 1",
                    "JURONG EAST AVE 1",
                {
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "98M"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "98M",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    101: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "N1",
                destination: "YISHUN RING RD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "NEWTON RD",
                    "TOA PAYOH CENTRAL",
                    "BISHAN ST 11",
                    "ANG MO KIO AVE 3",
                    "ANG MO KIO AVE 4",
                    "LENTOR AVE",

                {
                    renderType: "destScroll",
                    top: "YISHUN RING RD",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "N1"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "N1",
                font: "LECIP-19:TowerB9Front",
                spacing: 2
            }
        }
    },
    102: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "N2",
                destination: "SEMBAWANG DR",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "WOODLANDS CENTRE RD",
                    "MARSILING RD",
                    "WOODLANDS AVE 7",
                    "ADMIRALTY DR",
                    "CANBERRA RD",,

                {
                    renderType: "destScroll",
                    top: "SEMBAWANG DR",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "N2"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "N2",
                font: "LECIP-19:TowerB9Front",
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
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "COMMONWEALTH AVE WEST",
                    "HOLLAND VILLAGE / RD",
                    "ORCHARD RD",
                    "BRAS BASAH RD",
                    "BAYFRONT AVE / MBS",         
                {
                    renderType: "destScroll",
                    top: "SHENTON WAY",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "106"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "106",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "106",
                destination: "BUKIT BATOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "ROBINSON RD",
                    "CENTRAL BOULEVARD", //Check if exist irl
                    "BAYFRONT AVE / MBS",
                    "ORCHARD BOULEVARD",
                    "HOLLAND RD / VILLAGE",
                    "COMMONWEALTH AVE WEST",
                {
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "106"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "106",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    "106A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "106A",
                destination: "CLEMENTI STN",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message4",
                    serviceNumber: "106A",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "CLEMENTI STN EXIT B",
                    bottomFont: "Hanover-8",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "106A",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    "106F": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "106",
                destination: "SHENTON WAY",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "COMMONWEALTH AVE WEST",
                    "HOLLAND VILLAGE / RD",
                    "ORCHARD RD",
                    "CITY HALL MRT",
                    "SOUTH BRIDGE RD",
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "106",
                    top: "SKIP",
                    topFont: "Hanover-Tower11:7",
    
                    bottom: "BRAS BASAH RD",
                    bottomFont: "Hanover-Tower7:5"
                },
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "106",
                    top: "SKIP",
                    topFont: "Hanover-Tower11:7",
    
                    bottom: "SUNTEC / MBS",
                    bottomFont: "Hanover-Tower7:5"
                },           
                {
                    renderType: "destScroll",
                    top: "SHENTON WAY",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "106"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "106",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "106",
                destination: "BUKIT BATOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "ROBINSON RD",
                    "ORCHARD BOULEVARD",
                    "HOLLAND RD / VILLAGE",
                    "COMMONWEALTH AVE WEST",,
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "106",
                    top: "SKIP",
                    topFont: "Hanover-Tower11:7",
    
                    bottom: "MBS / ESPLANADE",
                    bottomFont: "Hanover-Tower7:5"
                },       
                {
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "106"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "106",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    143: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "143",
                destination: "TOA PAYOH",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "TEBAN GARDENS RD",
                    "WEST COAST RD",
                    "HARBOURFRONT",
                    "CHINATOWN",
                    "ORCHARD TURN",   
                {
                    renderType: "destScroll",
                    top: "TOA PAYOH",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "143"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "143",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "143",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "ORCHARD RD",
                    "CHINATOWN",
                    "HARBOURFRONT",
                    "WEST COAST RD",
                    "TEBAN GARDENS RD",       
                {
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "143"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "143",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    "143C": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "143",
                destination: "TOA PAYOH",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "TEBAN GARDENS RD",
                    "WEST COAST RD",
                    "HARBOURFRONT",
                    "CHINATOWN",
                    "ORCHARD TURN",   
                {
                    renderType: "destScroll",
                    top: "?",
                    topFont: "Hanover-Tower19:11",
        
                    serviceNumber: "143"
                },
                {
                    renderType: "destScroll",
                    top: "TOA PAYOH",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "143"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "143",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "143",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "ORCHARD RD",
                    "CHINATOWN",
                    "HARBOURFRONT",
                    "WEST COAST RD",
                    "TEBAN GARDENS RD",       
                {
                    renderType: "destScroll",
                    top: "?",
                    topFont: "Hanover-Tower19:11",
    
                    serviceNumber: "143"
                },
                {
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "143"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "143",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    "143M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "143M",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "JURONG TOWN HALL RD",
                    "TEBAN GARDENS RD",
                    "PANDAN GARDENS",

                {
                    renderType: "message4",
                    serviceNumber: "143M",
                    top: "LOOPS AT",
                    topFont: "Hanover-Tower11:7",

                    bottom: "PANDAN GARDENS",
                    bottomFont: "Hanover-8"
                },
                {
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "143M"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "143M",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    "143X": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "143M",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "JURONG TOWN HALL RD",
                    "TEBAN GARDENS RD",
                    "PANDAN GARDENS",

                {
                    renderType: "message4",
                    serviceNumber: "143M",
                    top: "LOOPS AT",
                    topFont: "Hanover-Tower11:7",

                    bottom: "PANDAN GARDENS",
                    bottomFont: "Hanover-8"
                },
                {
                    renderType: "destScroll",
                    top: "?",
                    topFont: "Hanover-Tower19:11",
        
                    serviceNumber: "143M"
                },
                {
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "143M"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "143M",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    167: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "167",
                destination: "BUKIT MERAH",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "SEMBAWANG RD",
                    "UPPER THOMSON RD",
                    "THOMSON RD",
                    "ORCHARD RD",
                    "SHENTON WAY",   
                {
                    renderType: "destScroll",
                    top: "BUKIT MERAH",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "167"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "167",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "167",
                destination: "SEMBAWANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "CECIL STREET",
                    "ORCHARD TURN",
                    "THOMSON RD",
                    "UPPER THOMSON RD",
                    "SEMBAWANG RD",       
                {
                    renderType: "destScroll",
                    top: "SEMBAWANG",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "167"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "167",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    "167C": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "167",
                destination: "BUKIT MERAH",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "SEMBAWANG RD",
                    "UPPER THOMSON RD",
                    "THOMSON RD",
                    "ORCHARD RD",
                    "SHENTON WAY",   
                {
                    renderType: "destScroll",
                    top: "?",
                    topFont: "Hanover-Tower19:11",
            
                    serviceNumber: "167"
                },
                {
                    renderType: "destScroll",
                    top: "BUKIT MERAH",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "167"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "167",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "167",
                destination: "SEMBAWANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "CECIL STREET",
                    "ORCHARD TURN",
                    "THOMSON RD",
                    "UPPER THOMSON RD",
                    "SEMBAWANG RD",       
                {
                    renderType: "destScroll",
                    top: "?",
                    topFont: "Hanover-Tower19:11",
            
                    serviceNumber: "167"
                },    
                    {
                    renderType: "destScroll",
                    top: "SEMBAWANG",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "167"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "167",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    "167E": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "167e",
                destination: "SHENTON WAY",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "SEMBAWANG RD",
                    "SPRINGLEAF MRT",
                    "NEWTON MRT",
                    "ORCHARD RD",
                {
                    renderType: "message4",
                    serviceNumber: "167e",
                    top: "LIMITED STOPS",
                    topFont: "Hanover-Tower11:7",

                    bottom: "EXPRESS SERVICE",
                    bottomFont: "Hanover-8"
                },
                {
                    renderType: "destScroll",
                    top: "SHENTON WAY",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "167e"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "167e",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "167e",
                destination: "SEMBAWANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "STAMFORD RD",
                    "ORCHARD TURN",
                    "NEWTON MRT",
                    "SPRINGLEAF MRT",
                    "SEMBAWANG RD",,
                {
                    renderType: "message4",
                    serviceNumber: "167e",
                    top: "LIMITED STOPS",
                    topFont: "Hanover-Tower11:7",

                    bottom: "EXPRESS SERVICE",
                    bottomFont: "Hanover-8"
                },
                {
                    renderType: "destScroll",
                    top: "SEMBAWANG",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "167e"
                },
                    ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "167e",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    "167F": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "167",
                destination: "BUKIT MERAH",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "SEMBAWANG RD",
                    "UPPER THOMSON RD",
                    "THOMSON RD",
                    "ORCHARD RD",
                    "SHENTON WAY",
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "167",
                    top: "SKIP",
                    topFont: "Hanover-Tower11:7",
    
                    bottom: "BRAS BASAH RD",
                    bottomFont: "Hanover-Tower7:5"
                },
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "167",
                    top: "SKIP",
                    topFont: "Hanover-Tower11:7",
    
                    bottom: "COLLYER QUAY",
                    bottomFont: "Hanover-Tower7:5"
                },           
                {
                    renderType: "destScroll",
                    top: "BUKIT MERAH",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "167"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "167",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "167",
                destination: "SEMBAWANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "CECIL STREET",
                    "ORCHARD TURN",
                    "THOMSON RD",
                    "UPPER THOMSON RD",
                    "SEMBAWANG RD",
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "167",
                    top: "SKIP",
                    topFont: "Hanover-Tower11:7",
    
                    bottom: "FULLERTON RD",
                    bottomFont: "Hanover-Tower7:5"
                },
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "167",
                    top: "SKIP",
                    topFont: "Hanover-Tower11:7",
    
                    bottom: "ESPLANADE DR",
                    bottomFont: "Hanover-Tower7:5"
                },             
                {
                    renderType: "destScroll",
                    top: "SEMBAWANG",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "167"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "167",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    169: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "169",
                destination: "ANG MO KIO",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "WOODLANDS AVE 9",
                    "ADMIRALTY RD EAST",
                    "YISHUN MRT",
                    "SEMBAWANG RD",
                    "ANG MO KIO AVE 3",
                {
                    renderType: "destScroll",
                    top: "ANG MO KIO",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "169"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "169",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "169",
                destination: "WOODLANDS",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "ANG MO KIO AVE 3",
                    "SEMBAWANG RD",
                    "YISHUN MRT",
                    "ADMIRALTY RD EAST",
                    "WOODLANDS AVE 9",
                    {
                        renderType: "destScroll",
                        top: "WOODLANDS",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "169"
                    },
                    ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "169",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    "169A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "169A",
                destination: "OPP YISHUN STN",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message4",
                    serviceNumber: "169A",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "OPP YISHUN STN",
                    bottomFont: "Hanover-Tower8",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "169A",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    "169B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "169B",
                destination: "WOODLANDS AVE 8",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message4",
                    serviceNumber: "169B",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "WOODLANDS AVE 8",
                    bottomFont: "Hanover-Tower8",
                    },
                    {
                    renderType: "message4",
                    serviceNumber: "169B",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "BEF ADMIRALTY RD WEST",
                    bottomFont: "Hanover-Tower7:5",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "169B",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    171: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "171",
                destination: "BUKIT PANJANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "YISHUN AVE 5",
                    "SEMBAWANG RD",
                    "MANDAI RD",
                    "PETIR RD",
                {
                    renderType: "destScroll",
                    top: "BUKIT PANJANG",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "171"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "171",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "171",
                destination: "YISHUN",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "PETIR RD",
                    "MANDAI RD",
                    "SEMBAWANG RD",
                    "YISHUN AVE 5",
                    {
                        renderType: "destScroll",
                        top: "YISHUN",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "171"
                    },
                    ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "171",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    "171M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "171",
                destination: "MARINA CENTRE",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "MANDAI RD",
                    "PETIR RD",
                    "UPPER BUKIT TIMAH RD",
                    "DUNEARN RD",
                    "ORCHARD / BRAS BASAH RD",
                {
                    renderType: "destScroll",
                    top: "MARINA CENTRE",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "171"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "171",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "171",
                destination: "YISHUN",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "ORCHARD TURN",
                    "BUKIT TIMAH RD",
                    "UPPER BUKIT TIMAH RD",
                    "PETIR RD",
                    "MANDAI RD",
                    {
                        renderType: "destScroll",
                        top: "YISHUN",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "171"
                    },
                    ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "171",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    173: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "173",
                destination: "CLEMENTI",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "BUKIT BATOK EAST AVE 4",
                    "HILLVIEW AVE",
                    "HUME AVE",
                    "BEAUTY WORLD MRT",
                    "TOH TUCK RD / TERRACE",
                {
                    renderType: "destScroll",
                    top: "CLEMENTI",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "173"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "twolinerear",
                top: "173",
                topFont: "LECIP-TowerRear10:7",
                topSpacing: 2,

                bottom: "CLEMENTI",
                bottomFont: "Hanover-5:3",
                bottomSpacing: 1,
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "173",
                destination: "BUKIT BATOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "TOH TUCK RD / RISE",
                    "BEAUTY WORLD MRT",
                    "HUME AVE",
                    "JALAN BATU NILAM",
                    "BUKIT BATOK EAST AVE 4",
                    {
                        renderType: "destScroll",
                        top: "BUKIT BATOK",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "173"
                    },
                    ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "twolinerear",
                top: "173",
                topFont: "LECIP-TowerRear10:7",
                topSpacing: 2,

                bottom: "BT BATOK",
                bottomFont: "Hanover-5:3",
                bottomSpacing: 1,
            }
        }
    },
    "173A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "173A",
                destination: "BUKIT BATOK EAST AVE 4",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message4",
                    serviceNumber: "173A",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "BT BATOK EAST AVE 4",
                    bottomFont: "Hanover-Tower8",
                    },
                    {
                    renderType: "message4",
                    serviceNumber: "173A",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "BLK 254",
                    bottomFont: "Hanover-Tower8",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "173A",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    177: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "177",
                destination: "BUKIT PANJANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "BUKIT BATOK EAST AVE 4",
                    "HILLVIEW AVE",
                    "MINDEF",
                    "UPPER BUKIT TIMAH RD",
                {
                    renderType: "destScroll",
                    top: "BUKIT PANJANG",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "177"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 17",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message3",
                    serviceNumber: "",
                    top: "177",
                    topFont: "LECIP-TowerRear10:7",
                    bottom: "BUKIT",
                    bottomFont: "Hanover-5:3"
                    },
                    {
                        renderType: "message3",
                        serviceNumber: "",
                        top: "177",
                        topFont: "LECIP-TowerRear10:7",
                        bottom: "PANJANG",
                        bottomFont: "Hanover-5:3"
                        },
                ],
                scrollFont: "Hanover-7:5"
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "177",
                destination: "BUKIT BATOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "JELEBU RD",
                    "UPPER BUKIT TIMAH RD",
                    "MINDEF",
                    "HILLVIEW AVE",
                    "BUKIT BATOK EAST AVE 4",
                    {
                        renderType: "destScroll",
                        top: "BUKIT BATOK",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "177"
                    },
                    ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "twolinerear",
                top: "177",
                topFont: "LECIP-TowerRear10:7",
                topSpacing: 2,

                bottom: "BT BATOK",
                bottomFont: "Hanover-5:3",
                bottomSpacing: 1,
            }
        }
    },
    183: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "183",
                destination: "SCIENCE PARK RD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "TOH GUAN RD EAST",
                    "CLEMENTI MRT",
                    "CLEMENTI RD",
                    "PASIR PANJANG RD",
                {
                    renderType: "destScroll",
                    top: "SCIENCE  PARK  RD",
                    topFont: "Hanover-14:6",
        
                    serviceNumber: "183"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "183",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "183",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "PASIR PANJANG RD",
                    "CLEMENTI RD",
                    "CLEMENTI MRT",
                    "TOH GUAN RD EAST",
                    {
                        renderType: "destScroll",
                        top: "JURONG EAST",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "183"
                    },
                    ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "183",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    "183B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "183B",
                destination: "TOH TUCK AVE",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message4",
                    serviceNumber: "183B",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "TOH TUCK AVE",
                    bottomFont: "Hanover-Tower8",
                    },
                    {
                    renderType: "message4",
                    serviceNumber: "183B",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "AFT TOH TUCK LINK",
                    bottomFont: "Hanover-Tower8",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "183B",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    189: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "189",
                destination: "CLEMENTI AVE 1",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "BUKIT BATOK EAST AVE 6",                    
                    "BUKIT BATOK ST 23",
                    "CLEMENTI AVE 6",
                    "CLEMENTI MRT",
                {
                    renderType: "destScroll",
                    top: "CLEMENTI AVE 1",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "189"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "189",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "189",
                destination: "BUKIT BATOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "CLEMENTI MRT",
                    "CLEMENTI AVE 6",
                    "BUKIT BATOK ST 23",
                    "BUKIT BATOK EAST AVE 6",
                    {
                        renderType: "destScroll",
                        top: "BUKIT BATOK",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "189"
                    },
                    ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "189",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    "189A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "189A",
                destination: "BUKIT BATOK ST 23",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message4",
                    serviceNumber: "189A",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "BUKIT BATOK ST 23",
                    bottomFont: "Hanover-Tower8",
                    },
                    {
                    renderType: "message4",
                    serviceNumber: "189A",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "OPP MIDVIEW BUILDING",
                    bottomFont: "Hanover-Tower8",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "189A",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    282: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "282",
                destination: "CLEMENTI",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "CLEMENTI AVE 5",
                    "CLEMENTI AVE 2",
                    "CLEMENTI WEST ST 2",

                {
                    renderType: "destScroll",
                    top: "CLEMENTI",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "282"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "282",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    284: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "284",
                destination: "CLEMENTI",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "CLEMENTI AVE 4",

                {
                    renderType: "destScroll",
                    top: "CLEMENTI",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "284"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "28$",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    285: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "285",
                destination: "CLEMENTI",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "CLEMENTI AVE 2",
                    "WEST COAST RD",
                    "PANDAN LOOP",
                {
                    renderType: "destScroll",
                    top: "CLEMENTI",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "285"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "285",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    311: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "E31",
                destination: "CCL EXPRESS BUS",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "KENT RIDGE > HARBOURFRONT"
                ],
                scrollFont: "Hanover-7:3"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "E31",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    312: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "E31",
                destination: "CCL EXPRESS BUS",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "HARBOURFRONT > KENT RIDGE"
                ],
                scrollFont: "Hanover-7:3"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "E31",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    333: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "333",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "TOH GUAN RD", 
                    "JURONG EAST AVE 1",
                    "JURONG EAST ST 32",
                {
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "333"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "333",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    334: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "334",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "JURONG EAST AVE 1", 
                    "JURONG WEST AVE 1",
                    "JURONG WEST ST 42",
                {
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "334"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "33$",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    335: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "335",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "JURONG TOWN HALL RD",
                    "BOON LAY WAY",
                    "JURONG WEST ST 51",
                    "JURONG WEST ST 52",
                    "JURONG WEST ST 41",
                {
                    renderType: "destScroll",
                    top: "JURONG EAST",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "335"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "335",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    "500": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "0500",
                destination: "PULAU TEKONG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "JURONG TOWN HALL RD",
                    "P I E",
                    "UPP CHANGI RD NORTH",
                    "LOYANG AVE",
                    "SAF FERRY TERMINAL",
                    {
                        renderType: "destScroll",
                        top: "PULAU TEKONG",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "0500"
                    },
                    {
                        renderType: "centreMessageServiceScroll",
                        top: "Singapore's First",
                        topFont: "Hanover-7:5",
                        bottom: "amphibious bus route!",
                        bottomFont: "Hanover-7:5",
            
                        serviceNumber: "0500"
                    },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "0500",
                font: "LECIP-20:6",
                spacing: 2
            }
        }
    },
    521: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "S52",
                destination: "TEL SHUTTLE",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "CALDECOTT > OUTRAM PARK"
                ],
                scrollFont: "Hanover-7:3"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "S52",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    522: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "S52",
                destination: "TEL SHUTTLE",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "OUTRAM PARK > CALDECOTT"
                ],
                scrollFont: "Hanover-7:3"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "S52",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    651: { 
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "651",
                destination: "MARINA BLVD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "JURONG WEST AVE 3/5",
                    "JURONG WEST ST 75/64",
                    "JURONG WEST ST 81/61",
                    "ANSON RD",
                    "ROBINSON RD",
                {
                    renderType: "destScroll",
                    top: "CITY DIRECT",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "651"
                }, 
                {
                    renderType: "destScroll",
                    top: "MARINA  BOULEVARD",
                    topFont: "Hanover-14:6",
    
                    serviceNumber: "651"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "651",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "651",
                destination: "JURONG WEST AVE 3",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "CENTRAL BOULEVARD",
                    "SHENTON WAY",
                    "JURONG WEST ST 61/81",
                    "JURONG WEST ST 64/75",
                    "JURONG WEST AVE 5",
                {
                    renderType: "destScroll",
                    top: "CITY DIRECT",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "651"
                },                
                {
                    renderType: "destScroll",
                    top: "JURONG  WEST  AVE  3",
                    topFont: "Hanover-14:6",
        
                    serviceNumber: "651"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "651",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    653: { 
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "653",
                destination: "MARINA BLVD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "HILLVIEW AVE",
                    "BUKIT BATOK EAST AVE 2",
                    "BUKIT BATOK EAST AVE 3",
                    "ANSON RD",
                    "ROBINSON RD",
                {
                    renderType: "destScroll",
                    top: "CITY DIRECT",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "653"
                }, 
                {
                    renderType: "destScroll",
                    top: "MARINA  BOULEVARD",
                    topFont: "Hanover-14:6",
    
                    serviceNumber: "653"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "653",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "653",
                destination: "HILLVIEW AVE",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "CENTRAL BOULEVARD",
                    "SHENTON WAY",
                    "BUKIT BATOK EAST AVE 3",
                    "BUKIT BATOK EAST AVE 2",
                    "HUME AVE",
                {
                    renderType: "destScroll",
                    top: "CITY DIRECT",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "653"
                },                
                {
                    renderType: "destScroll",
                    top: "HILLVIEW AVE",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "653"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "653",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    656: { 
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "656",
                destination: "SHENTON WAY",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "ADMIRALTY LINK",
                    "SEMBAWANG DR",
                    "DHOBY GHAUT MRT",
                    "BRAS BASAH RD",
                    "COLLYER QUAY",
                {
                    renderType: "destScroll",
                    top: "CITY DIRECT",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "656"
                }, 
                {
                    renderType: "destScroll",
                    top: "SHENTON WAY",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "656"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "656",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "656",
                destination: "CANBERRA RD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "CENTRAL BOULEVARD",
                    "SHENTON WAY",
                    "BUKIT BATOK EAST AVE 3",
                    "BUKIT BATOK EAST AVE 2",
                    "HUME AVE",
                {
                    renderType: "destScroll",
                    top: "CITY DIRECT",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "656"
                },                
                {
                    renderType: "destScroll",
                    top: "CANBERRA RD",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "656"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "656",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    "656F": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "656",
                destination: "SHENTON WAY",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "ADMIRALTY LINK",
                    "SEMBAWANG DR",
                    "DHOBY GHAUT MRT",
                    "NORTH BRIDGE RD",
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "656",
                    top: "SKIP",
                    topFont: "Hanover-Tower11:7",
    
                    bottom: "BRAS BASAH RD",
                    bottomFont: "Hanover-Tower7:5"
                },
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "656",
                    top: "SKIP",
                    topFont: "Hanover-Tower11:7",
    
                    bottom: "COLLYER QUAY",
                    bottomFont: "Hanover-Tower7:5"
                },

                {
                    renderType: "destScroll",
                    top: "CITY DIRECT",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "656"
                },                
                {
                    renderType: "destScroll",
                    top: "SHENTON WAY",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "656"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "656",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "656",
                destination: "CANBERRA RD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "ROBINSON RD",
                    "STAMFORD RD",
                    "DHOBY GHAUT MRT",
                    "SEMBAWANG RD",
                    "ADMIRALTY LINK",
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "656",
                    top: "SKIP",
                    topFont: "Hanover-Tower11:7",
    
                    bottom: "FULLERTON RD",
                    bottomFont: "Hanover-Tower7:5"
                },
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "656",
                    top: "SKIP",
                    topFont: "Hanover-Tower11:7",
    
                    bottom: "ESPLANADE DR",
                    bottomFont: "Hanover-Tower7:5"
                },

                {
                    renderType: "destScroll",
                    top: "CITY DIRECT",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "656"
                },                
                {
                    renderType: "destScroll",
                    top: "CANBERRA RD",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "656"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "656",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    657: { 
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "657",
                destination: "MARINA BLVD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "JURONG EAST AVE 1",
                    "TOH GUAN RD",
                    "ANSON RD",
                    "ROBINSON RD",
                {
                    renderType: "destScroll",
                    top: "CITY DIRECT",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "657"
                }, 
                {
                    renderType: "destScroll",
                    top: "MARINA  BOULEVARD",
                    topFont: "Hanover-14:6",
    
                    serviceNumber: "657"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "657",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "657",
                destination: "JURONG WEST AVE 1",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "CENTRAL BOULEVARD",
                    "SHENTON WAY",
                    "TOH GUAN RD",
                    'JURONG EAST AVE 1',
                {
                    renderType: "destScroll",
                    top: "CITY DIRECT",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "657"
                },                
                {
                    renderType: "destScroll",
                    top: "JURONG  WEST  AVE  1",
                    topFont: "Hanover-14:6",
    
                    serviceNumber: "657"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "657",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    663: { 
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "663",
                destination: "SHENTON WAY",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "YISHUN AVE 6 / RING RD",
                    "YISHUN CTRL / AVE 2",
                    "DHOBY GHAUT MRT",
                    "BRAS BASAH RD",
                    "COLLYER QUAY",

                {
                    renderType: "destScroll",
                    top: "CITY DIRECT",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "663"
                },                
                {
                    renderType: "destScroll",
                    top: "SHENTON WAY",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "663"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "663",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "663",
                destination: "YISHUN AVE 6",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "ROBINSON RD",
                    "STAMFORD RD",
                    "DHOBY GHAUT MRT",
                    "YISHUN AVE 2 / CTRL",
                    "YISHUN AVE 11 / RING RD",

                {
                    renderType: "destScroll",
                    top: "CITY DIRECT",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "663"
                },
                {
                    renderType: "destScroll",
                    top: "YISHUN AVE 6",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "665"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "663",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    "663F": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "663",
                destination: "SHENTON WAY",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "YISHUN AVE 6 / RING RD",
                    "YISHUN CTRL / AVE 2",
                    "DHOBY GHAUT MRT",
                    "NORTH BRIDGE RD",
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "663",
                    top: "SKIP",
                    topFont: "Hanover-Tower11:7",
    
                    bottom: "BRAS BASAH RD",
                    bottomFont: "Hanover-Tower7:5"
                },
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "663",
                    top: "SKIP",
                    topFont: "Hanover-Tower11:7",
    
                    bottom: "COLLYER QUAY",
                    bottomFont: "Hanover-Tower7:5"
                },

                {
                    renderType: "destScroll",
                    top: "CITY DIRECT",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "663"
                },                
                {
                    renderType: "destScroll",
                    top: "SHENTON WAY",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "663"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "663",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "663",
                destination: "YISHUN AVE 6",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "ROBINSON RD",
                    "STAMFORD RD",
                    "DHOBY GHAUT MRT",
                    "YISHUN AVE 2 / CTRL",
                    "YISHUN AVE 11 / RING RD",
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "663",
                    top: "SKIP",
                    topFont: "Hanover-Tower11:7",
    
                    bottom: "FULLERTON RD",
                    bottomFont: "Hanover-Tower7:5"
                },
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "663",
                    top: "SKIP",
                    topFont: "Hanover-Tower11:7",
    
                    bottom: "ESPLANADE DR",
                    bottomFont: "Hanover-Tower7:5"
                },

                {
                    renderType: "destScroll",
                    top: "CITY DIRECT",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "663"
                },                
                {
                    renderType: "destScroll",
                    top: "YISHUN AVE 6",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "663"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "663",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    665: { 
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "665",
                destination: "SHENTON WAY",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "MARSILING LANE / RISE",
                    "WOODLANDS AVE 5 / 4 / 1",
                    "DHOBY GHAUT MRT",
                    "BRAS BASAH RD",
                    "COLLYER QUAY",

                {
                    renderType: "destScroll",
                    top: "CITY DIRECT",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "665"
                },                
                {
                    renderType: "destScroll",
                    top: "SHENTON WAY",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "665"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "665",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "665",
                destination: "MARSILING DRIVE",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "ROBINSON RD",
                    "STAMFORD RD",
                    "DHOBY GHAUT MRT",
                    "WOODLANDS AVE 1 / 4 / 5",
                    "MARSILING RISE / LANE",

                {
                    renderType: "destScroll",
                    top: "CITY DIRECT",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "665"
                },                
                {
                    renderType: "destScroll",
                    top: "MARSILING DRIVE",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "665"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "665",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    "665F": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "665",
                destination: "SHENTON WAY",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "MARSILING LANE / RISE",
                    "WOODLANDS AVE 5 / 4 / 1",
                    "DHOBY GHAUT MRT",
                    "NORTH BRIDGE RD",
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "665",
                    top: "SKIP",
                    topFont: "Hanover-Tower11:7",
    
                    bottom: "BRAS BASAH RD",
                    bottomFont: "Hanover-Tower7:5"
                },
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "665",
                    top: "SKIP",
                    topFont: "Hanover-Tower11:7",
    
                    bottom: "COLLYER QUAY",
                    bottomFont: "Hanover-Tower7:5"
                },

                {
                    renderType: "destScroll",
                    top: "CITY DIRECT",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "665"
                },                
                {
                    renderType: "destScroll",
                    top: "SHENTON WAY",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "665"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "665",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "665",
                destination: "MARSILING DRIVE",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "ROBINSON RD",
                    "STAMFORD RD",
                    "DHOBY GHAUT MRT",
                    "WOODLANDS AVE 1 / 4 / 5",
                    "MARSILING RISE / LANE",
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "665",
                    top: "SKIP",
                    topFont: "Hanover-Tower11:7",
    
                    bottom: "FULLERTON RD",
                    bottomFont: "Hanover-Tower7:5"
                },
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "665",
                    top: "SKIP",
                    topFont: "Hanover-Tower11:7",
    
                    bottom: "ESPLANADE DR",
                    bottomFont: "Hanover-Tower7:5"
                },

                {
                    renderType: "destScroll",
                    top: "CITY DIRECT",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "665"
                },                
                {
                    renderType: "destScroll",
                    top: "MARSILING DRIVE",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "665"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "665",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    670: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "670",
                destination: "MARINA BLVD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "YISHUN AVE 6",
                    "YISHUN AVE 9",
                    "YISHUN RING RD",
                    "ANSON RD",
                    "ROBINSON RD",
                {
                    renderType: "destScroll",
                    top: "CITY DIRECT",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "670"
                },
                {
                    renderType: "destScroll",
                    top: "MARINA  BOULEVARD",
                    topFont: "Hanover-14:6",
            
                    serviceNumber: "670"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "670",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "670",
                destination: "YISHUN AVE 7",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "CENTRAL BOULEVARD",
                    "SHENTON WAY",
                    "YISHUN RING RD",
                    "YISHUN AVE 9",
                    "YISHUN AVE 6",
                {
                    renderType: "destScroll",
                    top: "CITY DIRECT",
                    topFont: "Hanover-Tower12:7",
    
                    serviceNumber: "670"
                },
                {
                    renderType: "destScroll",
                    top: "YISHUN AVE 7",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "670"
                },
                    ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "670",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    801: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "801",
                destination: "YISHUN",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "YISHUN CENTRAL",
                    "YISHUN AVE 9",
                    "YISHUN AVE 6",
                    "YISHUN ST 42",
                    "YISHUN AVE 1",
                {
                    renderType: "destScroll",
                    top: "YISHUN",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "801"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "801",
                font: "LECIP-TowerRear17:10",
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
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "ANG MO KIO AVE 6",
                    "LENTOR MRT",
                    "LENTOR RD",
                    "LENTOR LOOP",
                {
                    renderType: "destScroll",
                    top: "YIO CHU KANG",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "825"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "825",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    853: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "853",
                destination: "LOR 1 GEYLANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "YISHUN AVE 2",
                    "ANG MO KIO AVE 6",
                    "SERANGOON CENTRAL",
                    "UPPER SERANGOON RD",
                    "GEYLANG BAHRU",
            {
                renderType: "destScroll",
                top: "LOR 1 GEYLANG",
                topFont: "Hanover-Tower11:7",
    
                serviceNumber: "853"
            },
            ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "853",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "853",
                destination: "YISHUN",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "GEYLANG BAHRU",
                    "UPPER SERANGOON RD",
                    "SERANGOON CENTRAL",
                    "ANG MO KIO AVE 6",
                    "YISHUN AVE 2",
                {
                    renderType: "destScroll",
                    top: "YISHUN",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "853"
                },
                ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "853",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },     
    "853M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "853M",
                destination: "UPP EAST COAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "ANG MO KIO AVE 6",
                    "SERANGOON CENTRAL",
                    "SIMS AVE",
                    "TANJONG KATONG RD",
                    "MARINE PARADE RD",
            {
                renderType: "destScroll",
                top: "UPP  EAST  COAST",
                topFont: "Hanover-14:6",
    
                serviceNumber: "853M"
            },
            ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "853M",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "853M",
                destination: "YISHUN",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "MARINE PARADE RD",
                    "TANJONG KATONG RD",
                    "GEYLANG RD",
                    "SERANGOON CENTRAL",
                    "ANG MO KIO AVE 6",
                {
                    renderType: "destScroll",
                    top: "YISHUN",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "853M"
                },
                ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "853M",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },   
    854: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "854",
                destination: "BEDOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "YISHUN AVE 2",
                    "YIO CHU KANG RD",
                    "HOUGANG AVE 3",
                    "JLN EUNOS",
                    "NEW UPPER CHANGI RD",
            {
                renderType: "destScroll",
                top: "BEDOK",
                topFont: "Hanover-Tower12:7",
    
                serviceNumber: "854"
            },
            ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "85$",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "854",
                destination: "YISHUN",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "NEW UPPER CHANGI RD",
                    "EUNOS LINK",
                    "HOUGANG AVE 3",
                    "YIO CHU KANG RD",
                    "YISHUN AVE 2",
                {
                    renderType: "destScroll",
                    top: "YISHUN",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "854"
                },
                ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "85$",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },   
    "854E": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "854e",
                destination: "BEDOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "YISHUN AVE 2",
                    "YIO CHU KANG RD",
                    "HOUGANG AVE 3",
                    "EUNOS LINK",
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "854e",
                    top: "LIMITED STOPS",
                    topFont: "Hanover-Tower11:7",

                    bottom: "EXPRESS SERVICE",
                    bottomFont: "Hanover-Tower7:5"
                },
                {
                    renderType: "destScroll",
                    top: "BEDOK",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "854e"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "854e",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    855: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "855",
                destination: "HARBOURFRONT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "YISHUN AVE 2",
                    "UPPER THOMSON RD",
                    "ADAM RD",
                    "QUEENSWAY",
                    "JALAN BUKIT MERAH",
            {
                renderType: "destScroll",
                top: "HARBOURFRONT",
                topFont: "Hanover-Tower12:7",
    
                serviceNumber: "855"
            },
            ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "855",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "855",
                destination: "YISHUN",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "JALAN BUKIT MERAH",
                    "QUEENSWAY",
                    "FARRER RD",
                    "UPPER THOMSON RD",
                    "YISHUN AVE 2",
                {
                    renderType: "destScroll",
                    top: "YISHUN",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "855"
                },
                ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "855",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },      
    856: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "856",
                destination: "WOODLANDS",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "CANBERRA RD",
                    "ADMIRALTY RD WEST",
                    "SENOKO DR",
                    "WOODLANDS NORTH MRT",
                    "MARSILING ESTATE",
            {
                    renderType: "destScroll",
                    top: "WOODLANDS",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "856"
            },
            ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "twolinerear",
                top: "856",
                topFont: "LECIP-TowerRear10:7",
                topSpacing: 2,

                bottom: "W'LANDS",
                bottomFont: "Hanover-5:3",
                bottomSpacing: 1,
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "856",
                destination: "YISHUN",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "WOODLANDS TRAIN CHKPT",
                    "WOODLANDS NORTH MRT",
                    "SENOKO RD",
                    "ADMIRALTY RD WEST",
                    "CANBERRA RD",
                {
                    renderType: "destScroll",
                    top: "YISHUN",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "856"
                },
                ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "twolinerear",
                top: "856",
                topFont: "LECIP-TowerRear10:7",
                topSpacing: 2,

                bottom: "YISHUN",
                bottomFont: "Hanover-5:3",
                bottomSpacing: 1,
            }
        }
    },
    "856A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "856A",
                destination: "W'LANDS TRAIN CHECKPOINT",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message4",
                    serviceNumber: "856A",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "WDL TRAIN CHECKPT",
                    bottomFont: "Hanover-Tower8",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "856A",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    "856B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "856B",
                destination: "CANBERRA RD",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message4",
                    serviceNumber: "856B",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "CANBERRA RD",
                    bottomFont: "Hanover-Tower8",
                    },
                    {
                    renderType: "message4",
                    serviceNumber: "856B",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "AFT ADMIRAL HILL",
                    bottomFont: "Hanover-Tower8",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "856B",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    857: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "857",
                destination: "TEMASEK AVE",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                "YIO CHU KANG RD",
                "BENDEMEER RD",
                "LITTLE INDIA",
                "BENCOOLEN ST",
                "BRAS BASAH RD",
            {
                renderType: "destScroll",
                top: "TEMASEK AVE",
                topFont: "Hanover-Tower12:7",
    
                serviceNumber: "857"
            },
            ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "857",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "857",
                destination: "YISHUN",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "STAMFORD RD",
                    "SELEGIE RD",
                    "BOON KENG MRT",
                    "SERANGOON RD",
                    "YIO CHU KANG RD",
                {
                    renderType: "destScroll",
                    top: "YISHUN",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "857"
                },
                ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "857",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },  
    "857A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "857A",
                destination: "YIO CHU KANG RD",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message4",
                    serviceNumber: "857A",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "YIO CHU KANG RD",
                    bottomFont: "Hanover-Tower8",
                    },
                    {
                    renderType: "message4",
                    serviceNumber: "857A",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "OPP SUNRISE GDNS",
                    bottomFont: "Hanover-Tower8",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "857A",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    "857B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "857B",
                destination: "TEMASEK AVE",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message4",
                    serviceNumber: "857B",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "TEMASEK AVE",
                    bottomFont: "Hanover-Tower8",
                    },
                    {
                    renderType: "message4",
                    serviceNumber: "857B",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "PROMENADE STN",
                    bottomFont: "Hanover-Tower8",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "857B",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "857B",
                destination: "STAMFORD RD",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message4",
                    serviceNumber: "857B",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "STAMFORD RD",
                    bottomFont: "Hanover-Tower8",
                    },
                    {
                    renderType: "message4",
                    serviceNumber: "857B",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "CAPITOL BUILDING",
                    bottomFont: "Hanover-Tower8",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "857B",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },  
    "857C": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "857",
                destination: "TEMASEK AVE",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                "YIO CHU KANG RD",
                "BENDEMEER RD",
                "LITTLE INDIA",
                "BENCOOLEN ST",
                "BRAS BASAH RD",
            {
                renderType: "destScroll",
                top: "?",
                topFont: "Hanover-Tower19:11",
            
                serviceNumber: "857"
            },            
            {
                renderType: "destScroll",
                top: "TEMASEK AVE",
                topFont: "Hanover-Tower12:7",
    
                serviceNumber: "857"
            },
            ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "857",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "857",
                destination: "YISHUN",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "STAMFORD RD",
                    "SELEGIE RD",
                    "BOON KENG MRT",
                    "SERANGOON RD",
                    "YIO CHU KANG RD",
                {
                    renderType: "destScroll",
                    top: "?",
                    topFont: "Hanover-Tower19:11",
            
                    serviceNumber: "857"
                },
                {
                    renderType: "destScroll",
                    top: "YISHUN",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "857"
                },
                ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "857",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    }, 
    "857F": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "857",
                destination: "STAMFORD RD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "YIO CHU KANG RD",
                    "BENDEMEER RD",
                    "LITTLE INDIA",
                    "BENCOOLEN ST",
            {
                renderType: "centreMessageServiceScroll",
                serviceNumber: "857",
                top: "SKIP",
                topFont: "Hanover-Tower11:7",

                bottom: "BRAS BASAH RD",
                bottomFont: "Hanover-Tower7:5"
            },
            {
                renderType: "centreMessageServiceScroll",
                serviceNumber: "857",
                top: "SKIP",
                topFont: "Hanover-Tower11:7",

                bottom: "MARINA CENTRE / SUNTEC",
                bottomFont: "Hanover-Tower7:5"
            },
            {
                renderType: "destScroll",
                top: "STAMFORD RD",
                topFont: "Hanover-Tower12:7",
    
                serviceNumber: "857"
            },
            ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "857",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "857",
                destination: "YISHUN",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "STAMFORD RD",
                    "SELEGIE RD",
                    "BOON KENG MRT",
                    "SERANGOON RD",
                    "YIO CHU KANG RD",
                {
                    renderType: "destScroll",
                    top: "YISHUN",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "857"
                },
                ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "857",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },  
    858: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "858",
                destination: "CHANGI AIRPORT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "WOODLANDS AVE 9",
                    "SEMBAWANG WAY",
                    "YISHUN MRT",
                    "JALAN KAYU",
                    "T P E",
                {
                    renderType: "destScroll",
                    top: "CHANGI AIRPORT",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "858"
                },
            ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "858",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "858",
                destination: "WOODLANDS",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "T P E",
                    "JALAN KAYU",
                    "YISHUN MRT",
                    "SEMBAWANG WAY",
                    "WOODLANDS AVE 9",
                {
                    renderType: "destScroll",
                    top: "WOODLANDS",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "858"
                },
                ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "858",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },  
    "858A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "858A",
                destination: "OPP YISHUN STN",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message4",
                    serviceNumber: "858A",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "OPP YISHUN STN",
                    bottomFont: "Hanover-Tower8",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "858A",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "858",
                destination: "CHANGI AIRPORT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "WOODLANDS AVE 9",
                    "SEMBAWANG WAY",
                    "YISHUN MRT",
                    "JALAN KAYU",
                    "T P E",
                {
                    renderType: "message2",
                    serviceNumber: "858",
                    top: "CHANGI AIRPORT",
                    topFont: "Hanover-Tower11:7",
                    image: "ChangiAirportControlTower"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "858",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    "858B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "858B",
                destination: "JALAN KAYU",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message4",
                    serviceNumber: "858B",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "JALAN KAYU",
                    bottomFont: "Hanover-Tower8",
                    },
                    {
                    renderType: "message4",
                    serviceNumber: "858B",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "AFT SELETAR CAMP G",
                    bottomFont: "Hanover-Tower8",                        
                    },
                    {
                    renderType: "message4",
                    serviceNumber: "858B",
                    top: "JALAN KAYU",
                    topFont: "Hanover-Tower11:7",
                    bottom: "CHANGI AIRPORT",
                    bottomFont: "Hanover-Tower7:5",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "858B",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    "858C": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "858",
                destination: "CHANGI AIRPORT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "WOODLANDS AVE 9",
                    "SEMBAWANG WAY",
                    "YISHUN MRT",
                    "JALAN KAYU",
                    "T P E",
                {
                    renderType: "destScroll",
                    top: "?",
                    topFont: "Hanover-Tower19:11",
                    
                    serviceNumber: "858"
                },
                {
                    renderType: "destScroll",
                    top: "CHANGI AIRPORT",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "858"
                },
            ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "858",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "858",
                destination: "WOODLANDS",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "T P E",
                    "JALAN KAYU",
                    "YISHUN MRT",
                    "SEMBAWANG WAY",
                    "WOODLANDS AVE 9",
                {
                    renderType: "destScroll",
                    top: "?",
                    topFont: "Hanover-Tower19:11",
                        
                   serviceNumber: "858"
                },
                {
                    renderType: "destScroll",
                    top: "WOODLANDS",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "858"
                },
                ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "858",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },  
    "858D": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "858",
                destination: "WOODLANDS",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "YISHUN MRT",
                    "SEMBAWANG WAY",
                    "WOODLANDS AVE 9",
            {
                    renderType: "destScroll",
                    top: "WOODLANDS",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "858"
            },
            ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "858",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    }, 
    859: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "859",
                destination: "YISHUN",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "CANBERRA RD",
                    "ADMIRALTY LINK",
                    "SEMBAWANG CRES",
                    "SEMBAWANG RD",
                    "YISHUN AVE 5",
            {
                    renderType: "destScroll",
                    top: "YISHUN",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "859"
            },
            ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "859",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "859",
                destination: "SEMBAWANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "YISHUN AVE 5",
                    "SEMBAWANG RD",
                    "SEMBAWANG CRES",
                    "ADMIRALTY LINK",
                    "CANBERRA RD",
                {
                    renderType: "destScroll",
                    top: "SEMBAWANG",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "859"
                },
                ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "859",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    "859A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "859A",
                destination: "SEMBAWANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "CANBERRA RD",
                    "ADMIRALTY LINK",
                    "ADMIRALTY DR",
                    "SEMBWAWANG CRES",
                {
                    renderType: "destScroll",
                    top: "SEMBAWANG",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "859A"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "859A",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    "859B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "859B",
                destination: "SEMBAWANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "SEMBAWANG CRES",
                    "ADMIRALTY DR",
                    "ADMIRALTY LINK",
                    "CANBERRA RD",
                {
                    renderType: "destScroll",
                    top: "SEMBAWANG",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "859B"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "859B",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    "859T": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "859T",
                destination: "YISHUN INT",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message4",
                    serviceNumber: "859T",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "YISHUN INT",
                    bottomFont: "Hanover-Tower8",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "859T",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    870: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "870",
                destination: "TENGAH",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "BUKIT BATOK AVE 1",
                    "BUKIT BATOK WEST AVE 6",
                    "BUKIT BATOK WEST AVE 3",
                    "PLANTATION CRESCENT",
            {
                    renderType: "destScroll",
                    top: "TENGAH",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "870"
            },
            ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "870",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "870",
                destination: "JURONG TOWN HALL",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "BUKIT BATOK RD",
                    "BUKIT BATOK WEST AVE 3",
                    "BUKIT BATOK WEST AVE 6",
                    "BUKIT BATOK AVE 1",
                    "JURONG EAST CENTRAL",
                {
                    renderType: "destScroll",
                    top: "JURONG TOWN HALL",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "870"
                },
                ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "870",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    "870A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "870A",
                destination: "TENGAH BOULEVARD",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message4",
                    serviceNumber: "870A",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "TENGAH BOULEVARD",
                    bottomFont: "Hanover-Tower8",
                    },
                    {
                    renderType: "message4",
                    serviceNumber: "870A",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "BLK 231B",
                    bottomFont: "Hanover-Tower8",                        
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "870A",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    871: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "871",
                destination: "BEAUTY WORLD MRT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "TENGAH GARDEN WALK",   
                    "BUKIT BATOK WEST AVE 6",
                    "BUKIT BATOK ST 52",
                    "BUKIT BATOK EAST AVE 3",
                    "JLN JURONG KECHIL",
                {
                    renderType: "destScroll",
                    top: "BEAUTY  WORLD  MRT",
                    topFont: "Hanover-14:6",
    
                    serviceNumber: "871"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "871",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "871",
                destination: "TENGAH",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "JLN JURONG KECHIL",
                    "BUKIT BATOK EAST AVE 3",
                    "BUKIT BATOK ST 52",
                    "BUKIT BATOK WEST AVE 6",
                    "TENGAH DR",
            {
                    renderType: "destScroll",
                    top: "TENGAH",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "871"
            },
            ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "871",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    882: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "882",
                destination: "SEMBAWANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "WELLINGTON CIRCLE",
                    "MONTREAL DR",
                    "MONTREAL LINK",
                    "SEMBAWANG RD",
                    "SEMBAWANG PARK",
                {
                    renderType: "destScroll",
                    top: "SEMBAWANG",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "882"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "882",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    "882A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "882A",
                destination: "MONTREAL LINK",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message4",
                    serviceNumber: "882A",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "MONTREAL LINK",
                    bottomFont: "Hanover-Tower8",
                    },
                    {
                    renderType: "message4",
                    serviceNumber: "882A",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "BLK 592A",
                    bottomFont: "Hanover-Tower8",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "882A",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    883: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "883",
                destination: "YISHUN CTRL 2",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "CANBERRA WAY",
                    "CANBERRA ST",
                    "CANBERRA MRT",
                    "YISHUN AVE 2",
                    "YISHUN MRT",
            {
                    renderType: "destScroll",
                    top: "YISHUN CTRL 2",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "883"
            },
            ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "twolinerear",
                top: "883",
                topFont: "LECIP-TowerRear10:7",
                topSpacing: 2,

                bottom: "YISHUN",
                bottomFont: "Hanover-5:3",
                bottomSpacing: 1,
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "883",
                destination: "SEMBAWANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "YISHUN MRT",
                    "YISHUN AVE 2",
                    "CANBERRA MRT",
                    "CANBERRA ST",
                    "CANBERRA WAY",
                {
                    renderType: "destScroll",
                    top: "SEMBAWANG",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "883"
                },
                ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "twolinerear",
                top: "883",
                topFont: "LECIP-TowerRear10:7",
                topSpacing: 2,

                bottom: "S'WANG",
                bottomFont: "Hanover-5:3",
                bottomSpacing: 1,
            }
        }
    },
    "883A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "883A",
                destination: "CANBERRA RD",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message4",
                    serviceNumber: "883A",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "CANBERRA WAY",
                    bottomFont: "Hanover-Tower8",
                    },
                    {
                    renderType: "message4",
                    serviceNumber: "883A",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "BLK 129A",
                    bottomFont: "Hanover-Tower8",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "883A",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    "883B": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "883B",
                destination: "SEMBAWANG RD",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message4",
                    serviceNumber: "883B",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "SEMBAWANG RD",
                    bottomFont: "Hanover-Tower8",
                    },
                    {
                    renderType: "message4",
                    serviceNumber: "883B",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "OPP BLK 590C",
                    bottomFont: "Hanover-Tower8",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "883B",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    "883M": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "883M",
                destination: "YISHUN AVE 5",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "CANBERRA WAY",
                    "CANBERRA ST",
                    "CANBERRA MRT",
                    "YISHUN AVE 7",
                    "YISHUN AVE 5",
                {
                    renderType: "destScroll",
                    top: "YISHUN AVE 5",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "883M"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "twolinerear",
                top: "883M",
                topFont: "LECIP-TowerRear10:7",
                topSpacing: 1,

                bottom: "YISHUN",
                bottomFont: "Hanover-5:3",
                bottomSpacing: 1,
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "883M",
                destination: "SEMBAWANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "YISHUN MRT",
                    "YISHUN AVE 2",
                    "CANBERRA MRT",
                    "CANBERRA ST",
                    "CANBERRA WAY",
                    {
                        renderType: "destScroll",
                        top: "SEMBAWANG",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "883M"
                    },
                    ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "twolinerear",
                top: "883M",
                topFont: "LECIP-TowerRear10:7",
                topSpacing: 1,

                bottom: "S'WANG",
                bottomFont: "Hanover-5:3",
                bottomSpacing: 1,
            }
        }
    },
    941: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "941",
                destination: "BUKIT BATOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "BUKIT BATOK AVE 1",
                    "BUKIT BATOK WEST AVE 6",
                    "BUKIT BATOK WEST AVE 8",
                    "BUKIT BATOK WEST AVE 9",,
                {
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "941"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "9$1",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    944: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "944",
                destination: "BUKIT BATOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "BUKIT BATOK WEST AVE 6",
                    "BUKIT BATOK WEST AVE 8",
                    "BUKIT BATOK RD",
                {
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "944"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "9$$",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    945: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "945",
                destination: "BUKIT BATOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "BUKIT BATOK EAST AVE 5",
                   "BUKIT BATOK ST 52",
                   "BUKIT GOMBAK MRT",
                   "BUKIT BATOK WEST AVE 7",
                   "BUKIT BATOK ST 34",
                {
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "945"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "9$5",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    947: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "947",
                destination: "BUKIT BATOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "BUKIT BATOK WEST AVE 2",
                    "BUKIT BATOK WEST AVE 4",
                {
                    renderType: "destScroll",
                    top: "BUKIT BATOK",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "947"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "9$7",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    963: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "963",
                destination: "HARBOURFRONT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "BUKIT PANJANG RD",
                    "HILLVIEW AVE",
                    "BUKIT BATOK EAST AVE 3",
                    "A Y E",
                    "ALEXANDRA RD",
                {
                    renderType: "destScroll",
                    top: "HARBOURFRONT",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "963"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "963",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "963",
                destination: "WOODLANDS",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "ALEXANDRA RD",
                    "A Y E",
                    "BUKIT BATOK EAST AVE 3",
                    "HILLVIEW AVE",
                    "BUKIT PANJANG RD",
                    {
                        renderType: "destScroll",
                        top: "WOODLANDS",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "963"
                    },
                    ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "963",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    "963C": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "963",
                destination: "HARBOURFRONT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "BUKIT PANJANG RD",
                    "HILLVIEW AVE",
                    "BUKIT BATOK EAST AVE 3",
                    "A Y E",
                    "ALEXANDRA RD",
                {
                    renderType: "destScroll",
                    top: "?",
                    topFont: "Hanover-Tower19:11",
                    
                    serviceNumber: "963"
                },
                {
                    renderType: "destScroll",
                    top: "HARBOURFRONT",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "963"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "963",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "963",
                destination: "WOODLANDS",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "ALEXANDRA RD",
                    "A Y E",
                    "BUKIT BATOK EAST AVE 3",
                    "HILLVIEW AVE",
                    "BUKIT PANJANG RD",
                {
                    renderType: "destScroll",
                    top: "?",
                    topFont: "Hanover-Tower19:11",
                        
                    serviceNumber: "963"
                },
                {
                    renderType: "destScroll",
                    top: "WOODLANDS",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "963"
                },
                ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "963",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    "963E": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "963e",
                destination: "HARBOURFRONT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "WOODLANDS AVE 3",
                    "BUKIT PANJANG RD",
                    "HILLVIEW AVE",
                    "BT BATOK EAST AVE 3",
                    " A Y E",
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "963e",
                    top: "LIMITED STOPS",
                    topFont: "Hanover-Tower11:7",

                    bottom: "EXPRESS SERVICE",
                    bottomFont: "Hanover-Tower7:5"
                },
                {
                    renderType: "destScroll",
                    top: "HARBOURFRONT",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "963e"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "963e",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "963e",
                destination: "WOODLANDS",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "A Y E",
                    "BT BATOK EAST AVE 3",
                    "HILLVIEW AVE",
                    "BUKIT PANJANG RD",
                    "WOODLANDS AVE 3",
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "963e",
                    top: "LIMITED STOPS",
                    topFont: "Hanover-Tower11:7",

                    bottom: "EXPRESS SERVICE",
                    bottomFont: "Hanover-Tower7:5"
                },
                {
                    renderType: "destScroll",
                    top: "WOODLANDS",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "963e"
                },
                    ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "963e",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    "963R": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "963R",
                destination: "RESORTS WORLD SENTOSA",
                destinationFont: "Mobitec-Tower11:4",
                scrolls: [                    
                    "WOODLANDS AVE 3",
                    "BUKIT PANJANG RD",
                    "HILLVIEW AVE",
                    "BT BATOK EAST AVE 3",
                    " A Y E",
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "963R",
                    top: "LIMITED STOPS",
                    topFont: "Hanover-Tower11:7",

                    bottom: "EXPRESS SERVICE",
                    bottomFont: "Hanover-Tower7:5"
                },
                {
                    renderType: "destScroll",
                    top: "RESORTS WORLD",
                    topFont: "Mobitec-9:6",
                    bottom: "SENTOSA",
                    bottomFont: "Mobitec-9:6",
        
                    serviceNumber: "963R"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "963R",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "963R",
                destination: "WOODLANDS",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "A Y E",
                    "BT BATOK EAST AVE 3",
                    "HILLVIEW AVE",
                    "BUKIT PANJANG RD",
                    "WOODLANDS AVE 3",
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "963R",
                    top: "LIMITED STOPS",
                    topFont: "Hanover-Tower11:7",

                    bottom: "EXPRESS SERVICE",
                    bottomFont: "Hanover-Tower7:5"
                },
                {
                    renderType: "destScroll",
                    top: "WOODLANDS",
                    topFont: "Hanover-Tower12:7",
            
                    serviceNumber: "963R"
                },
                    ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "963R",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    965: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "965",
                destination: "SENGKANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "WOODLANDS AVE 7",
                    "GAMBAS AVE",
                    "YISHUN MRT",
                    "YISHUN MRT",
                    "COMPASSVALE RD",
                {
                    renderType: "destScroll",
                    top: "SENGKANG",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "965"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "965",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "965",
                destination: "WOODLANDS",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "COMPASSVALE RD",
                    "YISHUN MRT",
                    "YISHUN AVE 7",
                    "GAMBAS AVE",
                    "WOODLANDS AVE 7",
                    {
                        renderType: "destScroll",
                        top: "WOODLANDS",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "965"
                    },
                    ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "965",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    "965A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "965A",
                destination: "OPP YISHUN STN",
                destinationFont: "Hanover-10",
                scrolls: [
                    {
                    renderType: "message4",
                    serviceNumber: "965A",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "OPP YISHUN STN",
                    bottomFont: "Hanover-Tower8",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "965A",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    "965C": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "965",
                destination: "SENGKANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "WOODLANDS AVE 7",
                    "GAMBAS AVE",
                    "YISHUN MRT",
                    "YISHUN MRT",
                    "COMPASSVALE RD",
                {
                    renderType: "destScroll",
                    top: "?",
                    topFont: "Hanover-Tower19:11",
                        
                    serviceNumber: "965"
                },
                {
                    renderType: "destScroll",
                    top: "SENGKANG",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "965"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "965",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "965",
                destination: "WOODLANDS",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "COMPASSVALE RD",
                    "YISHUN MRT",
                    "YISHUN AVE 7",
                    "GAMBAS AVE",
                    "WOODLANDS AVE 7",
                    {
                        renderType: "destScroll",
                        top: "?",
                        topFont: "Hanover-Tower19:11",
                            
                        serviceNumber: "965"
                    },
                    {
                        renderType: "destScroll",
                        top: "WOODLANDS",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "965"
                    },
                    ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "965",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    "965T": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "965T",
                destination: "SENGKANG INT",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message4",
                    serviceNumber: "965T",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "SENGKANG INT",
                    bottomFont: "Hanover-Tower8",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "965T",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "963",
                destination: "WOODLANDS",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                {
                    renderType: "message4",
                    serviceNumber: "965T",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "SENGKANG INT",
                    bottomFont: "Hanover-Tower8",
                }, 
                {
                    renderType: "message4",
                    serviceNumber: "965T",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "SENGKANG INT",
                    bottomFont: "Hanover-Tower8",
                }, 
                {
                    renderType: "message4",
                    serviceNumber: "965T",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "SENGKANG INT",
                    bottomFont: "Hanover-Tower8",
                }, 
                {
                    renderType: "message4",
                    serviceNumber: "965T",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "SENGKANG INT",
                    bottomFont: "Hanover-Tower8",
                }, 
                {
                    renderType: "message4",
                    serviceNumber: "965T",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "SENGKANG INT",
                    bottomFont: "Hanover-Tower8",
                }, 
                {
                    renderType: "message4",
                    serviceNumber: "965T",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "SENGKANG INT",
                    bottomFont: "Hanover-Tower8",
                },  
                {
                    renderType: "centreMessageServiceScroll",
                    serviceNumber: "963",
                    top: "HELLO UNCLE",
                    topFont: "Hanover-Tower11:7",

                    bottom: "Is this bus going to Hillview?",
                    bottomFont: "Hanover-7:3"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "963",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    966: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "966",
                destination: "MARINE PARADE",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "WOODLANDS AVE 3",
                    "PENDING RD",
                    "JALAN KOLAM AYER",
                    "JALAN TOA PAYOH",
                    "JALAN EUNOS",
                {
                    renderType: "destScroll",
                    top: "MARINE PARADE",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "966"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "966",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "966",
                destination: "WOODLANDS",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "MARINE PARADE RD",
                    "JALAN EUNOS",
                    "JALAN KOLAM AYER",
                    "JALAN TOA PAYOH",
                    "PENDING RD",
                    {
                        renderType: "destScroll",
                        top: "WOODLANDS",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "966"
                    },
                    ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "966",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    "966A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "966A",
                destination: "MARINE PARADE RD",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message4",
                    serviceNumber: "966A",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "MARINE PARADE RD",
                    bottomFont: "Hanover-Tower8",
                    },
                    {
                    renderType: "message4",
                    serviceNumber: "966A",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "MARINE PDE STN EXIT 2",
                    bottomFont: "Hanover-Tower7:5",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "966A",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "966A",
                destination: "MARINE PARADE RD",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message4",
                    serviceNumber: "966A",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "MARINE PARADE RD",
                    bottomFont: "Hanover-Tower8",
                    },
                    {
                    renderType: "message4",
                    serviceNumber: "966A",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "OPP PARKWAY PARADE",
                    bottomFont: "Hanover-Tower7:5",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "966A",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    "966C": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "966",
                destination: "MARINE PARADE",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "WOODLANDS AVE 3",
                    "PENDING RD",
                    "JALAN KOLAM AYER",
                    "JALAN TOA PAYOH",
                    "JALAN EUNOS",
                {
                    renderType: "destScroll",
                    top: "?",
                    topFont: "Hanover-Tower19:11",
                            
                    serviceNumber: "966"
                },
                {
                    renderType: "destScroll",
                    top: "MARINE PARADE",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "966"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "966",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "966",
                destination: "WOODLANDS",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "MARINE PARADE RD",
                    "JALAN EUNOS",
                    "JALAN KOLAM AYER",
                    "JALAN TOA PAYOH",
                    "PENDING RD",
                    {
                        renderType: "destScroll",
                        top: "?",
                        topFont: "Hanover-Tower19:11",
                                
                        serviceNumber: "966"
                    },
                    {
                        renderType: "destScroll",
                        top: "WOODLANDS",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "966"
                    },
                    ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "966",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    969: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "969",
                destination: "TAMPINES",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "WOODLANDS AVE 7",
                    "GAMBAS AVE",
                    "YISHUN MRT",
                    "T P E",
                    "TAMPINES CONCOURSE",
                {
                    renderType: "destScroll",
                    top: "TAMPINES",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "969"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "969",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "969",
                destination: "WOODLANDS",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "TAMPINES CONCOURSE",
                    "T P E",
                    "YISHUN MRT",
                    "GAMBAS AVE",
                    "WOODLANDS AVE 7",
                    {
                        renderType: "destScroll",
                        top: "WOODLANDS",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "969"
                    },
                    ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "969",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    "969A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "969A",
                destination: "YISHUN STN",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message4",
                    serviceNumber: "969A",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "YISHUN STN",
                    bottomFont: "Hanover-Tower8",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "969A",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    "969C": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "969",
                destination: "TAMPINES",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "WOODLANDS AVE 7",
                    "GAMBAS AVE",
                    "YISHUN MRT",
                    "T P E",
                    "TAMPINES CONCOURSE",
                {
                    renderType: "destScroll",
                    top: "?",
                    topFont: "Hanover-Tower19:11",
                            
                    serviceNumber: "969"
                },
                {
                    renderType: "destScroll",
                    top: "TAMPINES",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "969"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "969",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "969",
                destination: "WOODLANDS",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "TAMPINES CONCOURSE",
                    "T P E",
                    "YISHUN MRT",
                    "GAMBAS AVE",
                    "WOODLANDS AVE 7",
                    {
                        renderType: "destScroll",
                        top: "?",
                        topFont: "Hanover-Tower19:11",
                                
                        serviceNumber: "969"
                    },
                    {
                        renderType: "destScroll",
                        top: "WOODLANDS",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "969"
                    },
                    ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "969",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    974: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "974",
                destination: "BUKIT PANJANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "UPPER JURONG RD",
                    "JURONG WEST ST 63",
                    "JALAN BOON LAY",
                    "CHOA CHU KANG MRT",
                    "CHOA CHU KANG WAY",
                {
                    renderType: "destScroll",
                    top: "BUKIT PANJANG",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "974"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "97$",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "974",
                destination: "JOO KOON",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "CHOA CHU KANG WAY",
                    "CHOA CHU KANG MRT",
                    "JALAN BOON LAY",
                    "JURONG WEST ST 63",
                    "UPPER JURONG RD",
                    {
                        renderType: "destScroll",
                        top: "JOO KOON",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "974"
                    },
                    ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "97$",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    "974A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "974A",
                destination: "LOT 1 SHOPPER'S MALL",
                destinationFont: "Hanover-10",
                scrolls: [
                    {
                    renderType: "message4",
                    serviceNumber: "974A",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "LOT 1 SHOPPERS MALL",
                    bottomFont: "Hanover-Tower7:5",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "974A",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    980: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "980",
                destination: "LOR 1 GEYLANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "SEMBAWANG RD",
                    "UPPER THOMSON RD",
                    "THOMSON RD",
                    "LITTLE INDIA",
                    "BEACH RD",
                {
                    renderType: "destScroll",
                    top: "LOR 1 GEYLANG",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "980"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "980",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "980",
                destination: "SEMBAWANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "BEACH RD",
                    "LITTLE INDIA",
                    "THOMSON RD",
                    "UPPER THOMSON RD",
                    "SEMBAWANG RD",
                    {
                        renderType: "destScroll",
                        top: "SEMBAWANG",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "980"
                    },
                    ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "980",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    981: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "981",
                destination: "SENOKO LOOP",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "CANBERRA RD",
                    "ADMIRALTY RD WEST",
                    "SENOKO DR",
                    "SENOKO RD",
                {
                    renderType: "destScroll",
                    top: "SENOKO LOOP",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "981"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "981",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "981",
                destination: "SEMBAWANG",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "SENOKO RD",
                    "SENOKO LOOP",
                    "SENOKO DR",
                    "ADMIRALTY RD WEST",
                    "CANBERRA RD",
                    {
                        renderType: "destScroll",
                        top: "SEMBAWANG",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "981"
                    },
                    ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "981",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        }
    },
    990: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "990",
                destination: "JURONG EAST MRT",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "BUKIT BATOK EAST AVE 3",
                    "BUKIT BATOK EAST AVE 6",
                    "TOH GUAN RD",
                {
                    renderType: "destScroll",
                    top: "JURONG  EAST  MRT",
                    topFont: "Hanover-14:6",
        
                    serviceNumber: "990"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "990",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "990",
                destination: "BUKIT BATOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "TOH GUAN RD",
                    "BUKIT BATOK EAST AVE 6",
                    "BUKIT BATOK EAST AVE 3",
                    {
                        renderType: "destScroll",
                        top: "BUKIT BATOK",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "990"
                    },
                    ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "990",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
   992: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "992",
                destination: "TENGAH",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                "BUKIT BATOK WEST AVE 6",
                "BUKIT BATOK WEST AVE 8",
                "BUKIT BATOK RD",
                "PLANTATION CRESCENT",
                {
                    renderType: "destScroll",
                    top: "TENGAH",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "992"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "992",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "992",
                destination: "BUKIT BATOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "PLANTATION CRESCENT",
                    "BUKIT BATOK RD",
                    "BUKIT BATOK WEST AVE 8",
                    "BUKIT BATOK WEST AVE 6",
                    {
                        renderType: "destScroll",
                        top: "BUKIT BATOK",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "992"
                    },
                    ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "992",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    "992T": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "992",
                destination: "TENGAH",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                "BUKIT BATOK WEST AVE 6",
                "BUKIT BATOK WEST AVE 8",
                "BUKIT BATOK RD",
                "PLANTATION CRESCENT",
                "TENGAH BOULEVARD",
                {
                    renderType: "destScroll",
                    top: "TENGAH",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "992"
                },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "992",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "992",
                destination: "BUKIT BATOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [                    
                    "PLANTATION CRESCENT",
                    "BUKIT BATOK RD",
                    "BUKIT BATOK WEST AVE 8",
                    "BUKIT BATOK WEST AVE 6",
                    {
                        renderType: "destScroll",
                        top: "BUKIT BATOK",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "992"
                    },
                    ],
                    scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "992",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    "992A": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "992A",
                destination: "TENGAH BOULEVARD",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message4",
                    serviceNumber: "992A",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "TENGAH BOULEVARD",
                    bottomFont: "Hanover-Tower8",
                    },
                    {
                    renderType: "message4",
                    serviceNumber: "992A",
                    top: "ENDS AT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "BLK 132B",
                    bottomFont: "Hanover-Tower8",                        
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "rearService",
                serviceNumber: "992A",
                font: "LECIP-TowerRear17:7",
                spacing: 1
            }
        }
    },
    "992N": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "992",
                destination: "TENGAH",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                        renderType: "944to992",
                        serviceNumber: "944>992",
                        top: "Start from",
                        topFont: "Lecip-Tower6:5",

                        bottom: " 24 Sep 2023",
                        bottomFont: "Lecip-Tower6:5"
                    },
                    {
                        renderType: "destScroll",
                        top: "TENGAH",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "992"
                    },
                    "BUKIT BATOK WEST AVE 6",
                    "BUKIT BATOK WEST AVE 8",
                    "BUKIT BATOK RD",
                    "PLANTATION CRESCENT",
                    "TENGAH BOULEVARD"
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "992",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "992",
                destination: "BUKIT BATOK",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                        renderType: "944to992",
                        serviceNumber: "944>992",
                        top: "Start from",
                        topFont: "Lecip-Tower6:5",

                        bottom: " 24 Sep 2023",
                        bottomFont: "Lecip-Tower6:5"
                    },
                    {
                        renderType: "destScroll",
                        top: "BUKIT BATOK",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "992"
                    },
                    "PLANTATION CRESCENT",
                    "BUKIT BATOK RD",
                    "BUKIT BATOK WEST AVE 8",
                    "BUKIT BATOK WEST AVE 6"
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "992",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },
    1111: {
        1: {
            front: {
                renderType: "message",
                text: "~ Off Service",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: {
                renderType: "message",
                text: "~",
                font: "Hanover-Tower19:11",
                spacing: 1
            }
        }
    },
    1112: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "SG BUS LOGO",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "SGUS",
                    topFont: "SGBusLogo-Mobitec",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "message",
                text: " ",
                font: "Hanover-Tower19:11",
                spacing: 1
            }
        }
    },
    2222: {
        1: {
            front: {
                renderType: "message",
                text: "Spare  Bus",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: {
                renderType: 'twolinerear',
                top: "Spare",
                topFont: "Hanover-7:5", 

                bottom: "Bus",
                bottomFont: "Hanover-7:5"
            }
        }
    },
    3333: {
        1: {
            front: {
                renderType: "full"
            },
            rear: {
                renderType: "full"
            }
        }
    },
    4444: {
        1: {
            front: {
                renderType: "message",
                text: "On Test",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: {
                renderType: 'twolinerear',
                top: "On",
                topFont: "Hanover-7:5", // check font

                bottom: "Test",
                bottomFont: "Hanover-7:5"
            }
        }
    },
    5000: {
        1: {
            front: {
                renderType: "twolinefront",
                top: "ROUTE  FAMILIARISATION",
                topFont: "Mobitec-9:6",
                topSpacing: 1,

                bottom: "TRAINING",
                bottomFont: "Mobitec-9:6",
                bottomSpacing: 1,
            },
            rear: { 
                renderType: "twolinerear",
                top: "ROUTE",
                topFont: "LECIP-6:3",
                topSpacing: 1,

                bottom: "FAM. TRG",
                bottomFont: "LECIP-6:3",
                bottomSpacing: 1,
            }
        }
    },
    5001: {
        1: {
            front: {
                renderType: "message",
                text: "NSL Bridging Bus",
                font: "Hanover-Tower17:11",
                spacing: 2
            },
            rear: {
                renderType: 'twolinefront',
                top: "NSL",
                topFont: "Mobitec-10:7",

                bottom: "Bridging",
                bottomFont: "Hanover-7:3"
            }
        }
    },
    5002: {
        1: {
            front: {
                renderType: "message",
                text: "EWL Bridging Bus",
                font: "Hanover-Tower17:11",
                spacing: 2
            },
            rear: {
                renderType: 'twolinefront',
                top: "EWL",
                topFont: "Mobitec-10:7",

                bottom: "Bridging",
                bottomFont: "Hanover-7:3"
            }
        }
    },
    5003: {
        1: {
            front: {
                renderType: "message",
                text: "NEL Bridging Bus",
                font: "Hanover-Tower17:11",
                spacing: 2
            },
            rear: {
                renderType: 'twolinefront',
                top: "NEL",
                topFont: "Mobitec-10:7",

                bottom: "Bridging",
                bottomFont: "Hanover-7:3"
            }
        }
    },
    5004: {
        1: {
            front: {
                renderType: "message",
                text: "CCL Bridging Bus",
                font: "Hanover-Tower17:11",
                spacing: 2
            },
            rear: {
                renderType: 'twolinefront',
                top: "CCL",
                topFont: "Mobitec-10:7",

                bottom: "Bridging",
                bottomFont: "Hanover-7:3"
            }
        }
    },
    5005: {
        1: {
            front: {
                renderType: "message",
                text: "DTL Bridging Bus",
                font: "Hanover-Tower17:11",
                spacing: 2
            },
            rear: {
                renderType: 'twolinefront',
                top: "DTL",
                topFont: "Mobitec-10:7",

                bottom: "Bridging",
                bottomFont: "Hanover-7:3"
            }
        }
    },
    5006: {
        1: {
            front: {
                renderType: "message",
                text: "TEL Bridging Bus",
                font: "Hanover-Tower17:11",
                spacing: 2
            },
            rear: {
                renderType: 'twolinefront',
                top: "TEL",
                topFont: "Mobitec-10:7",

                bottom: "Bridging",
                bottomFont: "Hanover-7:3"
            }
        }
    },
    5007: {
        1: {
            front: {
                renderType: "message",
                text: "LRT Bridging A",
                font: "Hanover-Tower17:11",
                spacing: 2
            },
            rear: {
                renderType: 'twolinefront',
                top: "LRT",
                topFont: "Mobitec-10:7",

                bottom: "A",
                bottomFont: "Hanover-Tower7:5"
            }
        }
    },
    5008: {
        1: {
            front: {
                renderType: "message",
                text: "LRT Bridging B",
                font: "Hanover-Tower17:11",
                spacing: 2
            },
            rear: {
                renderType: 'twolinefront',
                top: "LRT",
                topFont: "Mobitec-10:7",

                bottom: "B",
                bottomFont: "Hanover-Tower7:5"
            }
        }
    },
    5009: {
        1: {
            front: {
                renderType: "message",
                text: "LRT Bridging East",
                font: "Hanover-Tower17:11",
                spacing: 1
            },
            rear: {
                renderType: 'twolinefront',
                top: "LRT",
                topFont: "Mobitec-10:7",

                bottom: "EAST",
                bottomFont: "Hanover-Tower7:5"
            }
        }
    },
    5010: {
        1: {
            front: {
                renderType: "message",
                text: "LRT Bridging West",
                font: "Hanover-Tower17:11",
                spacing: 1
            },
            rear: {
                renderType: 'twolinefront',
                top: "LRT",
                topFont: "Mobitec-10:7",

                bottom: "WEST",
                bottomFont: "Hanover-Tower7:5"
            }
        }
    },
    5100: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT BLACK 01",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "TT  Black  01",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: 'twolinerear',
                top: "BLACK",
                topFont: "Hanover-Tower7:5",

                bottom: "01",
                bottomFont: "Mobitec-10:7"
            }
        }
    },
    5101: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT BLACK 02",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "TT  Black  02",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: 'twolinerear',
                top: "BLACK",
                topFont: "Hanover-Tower7:5",

                bottom: "02",
                bottomFont: "Mobitec-10:7"
            }
        }
    },
    5102: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT BLACK 03",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "TT  Black  03",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: 'twolinerear',
                top: "BLACK",
                topFont: "Hanover-Tower7:5",

                bottom: "03",
                bottomFont: "Mobitec-10:7"
            }
        }
    },
    5103: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT BLACK 04",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "TT  Black  04",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: 'twolinerear',
                top: "BLACK",
                topFont: "Hanover-Tower7:5",

                bottom: "04",
                bottomFont: "Mobitec-10:7"
            }
        }
    },
    5104: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT BLUE 01",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "TT  Blue  01",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: 'twolinerear',
                top: "BLUE",
                topFont: "Hanover-Tower7:5",

                bottom: "01",
                bottomFont: "Mobitec-10:7"
            }
        }
    },
    5105: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT BLUE 02",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "TT  Blue  02",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: 'twolinerear',
                top: "BLUE",
                topFont: "Hanover-Tower7:5",

                bottom: "02",
                bottomFont: "Mobitec-10:7"
            }
        }
    },
    5106: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT BLUE 03",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "TT  Blue  03",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: 'twolinerear',
                top: "BLUE",
                topFont: "Hanover-Tower7:5",

                bottom: "03",
                bottomFont: "Mobitec-10:7"
            }
        }
    },
    5107: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT BLUE 04",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "TT  Blue  04",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: 'twolinerear',
                top: "BLUE",
                topFont: "Hanover-Tower7:5",

                bottom: "04",
                bottomFont: "Mobitec-10:7"
            }
        }
    },
    5108: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT BROWN 01",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "TT  Brown  01",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: 'twolinerear',
                top: "BROWN",
                topFont: "Hanover-Tower7:5",

                bottom: "01",
                bottomFont: "Mobitec-10:7"
            }
        }
    },
    5109: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT BROWN 02",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "TT  Brown  02",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: 'twolinerear',
                top: "BROWN",
                topFont: "Hanover-Tower7:5",

                bottom: "02",
                bottomFont: "Mobitec-10:7"
            }
        }
    },
    5110: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT BROWN 03",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "TT  Brown  03",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: 'twolinerear',
                top: "BROWN",
                topFont: "Hanover-Tower7:5",

                bottom: "03",
                bottomFont: "Mobitec-10:7"
            }
        }
    },
    5111: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT BROWN 04",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "TT  Brown  0$",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: 'twolinerear',
                top: "BROWN",
                topFont: "Hanover-Tower7:5",

                bottom: "04",
                bottomFont: "Mobitec-10:7"
            }
        }
    },
    5112: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT GREEN 01",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "TT  Green  01",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: 'twolinerear',
                top: "GREEN",
                topFont: "Hanover-Tower7:5",

                bottom: "01",
                bottomFont: "Mobitec-10:7"
            }
        }
    },
    5113: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT GREEN 02",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "TT  Green  02",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: 'twolinerear',
                top: "GREEN",
                topFont: "Hanover-Tower7:5",

                bottom: "02",
                bottomFont: "Mobitec-10:7"
            }
        }
    },
    5114: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT GREEN 03",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "TT  Green  03",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: 'twolinerear',
                top: "GREEN",
                topFont: "Hanover-Tower7:5",

                bottom: "03",
                bottomFont: "Mobitec-10:7"
            }
        }
    },
    5115: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT GREEN 04",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "TT  Green  04",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: 'twolinerear',
                top: "GREEN",
                topFont: "Hanover-Tower7:5",

                bottom: "04",
                bottomFont: "Mobitec-10:7"
            }
        }
    },
    5200: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 01",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  0 1",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "TT01",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5201: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 02",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  0 2",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT02",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5202: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 03",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  0 3",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT03",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5203: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 04",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  0 4",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT04",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5204: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 05",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  0 5",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT05",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5205: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 06",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  0 6",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT06",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5206: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 07",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  0 7",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT07",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5207: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 08",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  0 8",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT08",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5208: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 09",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  0 9",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT09",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5209: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 10",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  1 0",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT10",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5210: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 11",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  1 1",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT11",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5211: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 12",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  1 2",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT12",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5212: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 13",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  1 3",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT13",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5213: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 14",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  1 4",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT14",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5214: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 15",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  1 5",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT15",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5215: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 16",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  1 6",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT16",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5216: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 17",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  1 7",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT17",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5217: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 18",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  1 8",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT18",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5218: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 19",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  1 9",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT19",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5219: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 20",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  2 0",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT20",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5220: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 21",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  2 1",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT21",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5221: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 22",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  2 2",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT22",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5222: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 23",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  2 3",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT23",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5223: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 24",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  2 4",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT24",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5224: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 25",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  2 5",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT25",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5225: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT 26",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "~  T T  2 6",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "TT26",
                font: "Mobitec-10:7",
                spacing: 2
            }
        }
    },
    5300: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "CREW BUS B1",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "b1",
                    top: "Crew  Bus",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "b1",
                font: "LECIP-19:TowerB9Front",
                spacing: 2
            }
        }
    },
    5301: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "CREW BUS B2",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "b2",
                    top: "Crew  Bus",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "b2",
                font: "LECIP-19:TowerB9Front",
                spacing: 2
            }
        }
    },
    5302: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "CREW BUS B3",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "b3",
                    top: "Crew  Bus",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "b3",
                font: "LECIP-19:TowerB9Front",
                spacing: 2
            }
        }
    },
    5303: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "CREW BUS B4",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "b4",
                    top: "Crew  Bus",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "b4",
                font: "LECIP-19:TowerB9Front",
                spacing: 2
            }
        }
    },
    5304: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "CREW BUS B5",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "b5",
                    top: "Crew  Bus",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "b5",
                font: "LECIP-19:TowerB9Front",
                spacing: 2
            }
        }
    },
    5305: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "CREW BUS B6",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "b6",
                    top: "Crew  Bus",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "b6",
                font: "LECIP-19:TowerB9Front",
                spacing: 2
            }
        }
    },
    5306: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "CREW BUS B7",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "b7",
                    top: "Crew  Bus",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "b7",
                font: "LECIP-19:TowerB9Front",
                spacing: 2
            }
        }
    },
    5307: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "CREW BUS B8",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "b8",
                    top: "Crew  Bus",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "b8",
                font: "LECIP-19:TowerB9Front",
                spacing: 2
            }
        }
    },
    5308: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "CREW BUS B9",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "b9",
                    top: "Crew  Bus",
                    topFont: "Hanover-Tower19:11",
                    image: "TTSRoundel"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "message",
                text: "b9",
                font: "LECIP-19:TowerB9Front",
                spacing: 2
            }
        }
    },
    5400: {
        1: {
            front: {
                renderType: "twolinefront",
                top: "BULIM - TTS",
                topFont: "Hanover-8",
                topSpacing: 1,

                bottom: "HOTEL FERRY",
                bottomFont: "Hanover-8",
                bottomSpacing: 1,
            },
            rear: { 
                renderType: "twolinerear",
                top: "Bulim -",
                topFont: "Hanover-7:5",
                topSpacing: 1,

                bottom: "Hotel",
                bottomFont: "Hanover-7:5",
                bottomSpacing: 1,
            }
        }
    },
    5401: {
        1: {
            front: {
                renderType: "twolinefront",
                top: "MANDAI - TTS",
                topFont: "Hanover-Tower11:7",
                topSpacing: 1,

                bottom: "HOTEL FERRY",
                bottomFont: "Hanover-Tower7:5",
                bottomSpacing: 1,
            },
            rear: { 
                renderType: "twolinerear",
                top: "Mandai -",
                topFont: "Hanover-7:3",
                topSpacing: 1,

                bottom: "Hotel",
                bottomFont: "Hanover-7:3",
                bottomSpacing: 1,
            }
        }
    },
    5402: {
        1: {
            front: {
                renderType: "twolinefront",
                top: "TTS HOTEL FERRY",
                topFont: "Hanover-Tower11:7",
                topSpacing: 1,

                bottom: "EMPLOYEE SHUTTLE",
                bottomFont: "Hanover-Tower7:5",
                bottomSpacing: 1,
            },
            rear: { 
                renderType: "twolinerear",
                top: "Hotel",
                topFont: "Hanover-7:5",
                topSpacing: 1,

                bottom: "Ferry",
                bottomFont: "Hanover-7:5",
                bottomSpacing: 1,
            }
        }
    },
    5403: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TTS HOTEL FERRY",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "TTS  - HOTEL FERRY",
                    topFont: "Hanover-Tower11:7",
                    bottom: "EMPLOYEE SHUTTLE",
                    bottomFont: "Hanover-7:5",
                    image: "DDBusIcon"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TT BLACK 01",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "",
                    topFont: "Hanover-Tower19:11",
                    image: "DDBusIcon"
                    },
                ],
                scrollFont: "Hanover-7:5"
            }
        }
    },
    5555: {
        1: {
            front: {
                renderType: "message",
                text: "Training  Bus",
                font: "Hanover-Tower19:11",
                spacing: 2
            },
            rear: {
                renderType: 'twolinerear',
                top: "Training",
                topFont: "Hanover-7:3",

                bottom: "Bus",
                bottomFont: "Hanover-7:3"
            }
        }
    },
    5998: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "BULIM DEPOT CREW BUS",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message4",
                    serviceNumber: "",
                    top: "BULIM  DEPOT",
                    topFont: "LECIP-20:9",
                    image: "DDBusIcon"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "twolinerear",
                top: "Bulim",
                topFont: "Hanover-7:5",
                topSpacing: 1,

                bottom: "Depot",
                bottomFont: "Hanover-7:5",
                bottomSpacing: 1,
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "BULIM DEPOT CREW BUS",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message4",
                    serviceNumber: "",
                    top: "BULIM DEPOT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "CREW BUS",
                    bottomFont: "Hanover-Tower7:5",
                    image: "DDBusIcon"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "twolinerear",
                top: "Bulim",
                topFont: "Hanover-7:5",
                topSpacing: 1,
    
                bottom: "Depot",
                bottomFont: "Hanover-7:5",
                bottomSpacing: 1,
            }
        }
    },
    5999: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "MANDAI DEPOT CREW BUS",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message4",
                    serviceNumber: "",
                    top: "MANDAI  DEPOT",
                    topFont: "LECIP-20:9",
                    image: "DDBusIcon"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "twolinerear",
                top: "Mandai",
                topFont: "Hanover-7:5",
                topSpacing: 1,

                bottom: "Depot",
                bottomFont: "Hanover-7:5",
                bottomSpacing: 1,
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "MANDAI DEPOT CREW BUS",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message4",
                    serviceNumber: "",
                    top: "MANDAI DEPOT",
                    topFont: "Hanover-Tower11:7",
                    bottom: "CREW BUS",
                    bottomFont: "Hanover-Tower7:5",
                    image: "DDBusIcon"
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "twolinerear",
                top: "Mandai",
                topFont: "Hanover-7:5",
                topSpacing: 1,
    
                bottom: "Depot",
                bottomFont: "Hanover-7:5",
                bottomSpacing: 1,
            }
        }
    },
    "17O": {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "170",
                destination: "LARKIN",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "LARKIN",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "170"
                },
                    "UPPER BUKIT TIMAH RD",
                    "BUKIT PANJANG MRT",
                    "WOODLANDS RD",
                    "KRANJI MRT",
                    "WOODLANDS CENTRE RD"
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "170",
                font: "LECIP-TowerRear17:10",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "%50",
                destination: "PONTIAN",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [{
                    renderType: "destScroll",
                    top: "PONTIAN",
                    topFont: "Hanover-Tower12:7",
        
                    serviceNumber: "%50"
                },
                    "PARADIGM MALL",
                    "SKUDAI",
                    "SRI PULAI / PULAI JAYA",
                    "KANGKAR PULAI",
                    "PEKAN NANAS",
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "%50",
                font: "LECIP-TowerRear17:10",
                spacing: 1
            }
        }
    },    6666: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "",
                destination: "TOWER TRANSIT LOGO",
                destinationFont: "Hanover-10",
                scrolls: [{
                    renderType: "message2",
                    serviceNumber: "",
                    top: "`",
                    topFont: "Hanover-Tower19:11",
                    },
                ],
                scrollFont: "Hanover-7:5"
            },
            rear: { 
                renderType: "message",
                text: "~",
                font: "Hanover-Tower19:11",
                spacing: 1
            }
        }
    },
    7777: {
        1: {
            front: {
                renderType: "message",
                text: "LECIP 220424",
                font: "Hanover-Tower19:11",
                spacing: 1
            },
            rear: {
                renderType: 'twolinerear',
                top: "LECIP",
                topFont: "Hanover-7:3", 

                bottom: "220424",
                bottomFont: "Hanover-7:3"
            }
        }
    },
    7971: {
        1: {
            front: {
                renderType: "standardService",
                serviceNumber: "97e",
                destination: "CENTRAL BLVD",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "A Y E",
                    "ALEXANDRA RD",
                    "HARBOURFRONT",
                    "ROBINSON RD",
                    {
                        renderType: "centreMessageServiceScroll",
                        serviceNumber: "97e",
                        top: "LIMITED STOPS",
                        topFont: "Hanover-Tower11:7",

                        bottom: "EXPRESS SERVICE",
                        bottomFont: "Hanover-Tower7:5"
                    },
                    {
                        renderType: "centreMessageServiceScroll",
                        serviceNumber: "97e",
                        top: "SKIPS",
                        topFont: "Hanover-Tower11:7",

                        bottom: "MBS / SUNTEC",
                        bottomFont: "Hanover-Tower7:5"
                    },                    
                    {
                        renderType: "destScroll",
                        top: "CENTRAL  BOULEVARD",
                        topFont: "Hanover-14:6",
            
                        serviceNumber: "97e"
                    },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "97e",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        },
        2: {
            front: {
                renderType: "standardService",
                serviceNumber: "97e",
                destination: "JURONG EAST",
                destinationFont: "Hanover-Tower11:7",
                scrolls: [
                    "SHENTON WAY",
                    "HARBOURFRONT",
                    "ALEXANDRA RD",
                    "A Y E",
                    {
                        renderType: "centreMessageServiceScroll",
                        serviceNumber: "97e",
                        top: "LIMITED STOPS",
                        topFont: "Hanover-Tower11:7",

                        bottom: "EXPRESS SERVICE",
                        bottomFont: "Hanover-Tower7:5"
                    },                  
                    {
                        renderType: "destScroll",
                        top: "JURONG EAST",
                        topFont: "Hanover-Tower12:7",
            
                        serviceNumber: "97e"
                    },
                ],
                scrollFont: "Hanover-Tower7:5"
            },
            rear: {
                renderType: "rearService",
                serviceNumber: "97e",
                font: "LECIP-TowerRear17:7",
                spacing: 2
            }
        }
    },
    9999: {
        1: {
            front: {
                renderType: "message",
                text: "Bus Under Repair",
                font: "Hanover-Tower17:11",
                spacing: 1
            },
            rear: {
                renderType: 'twolinerear',
                top: "Under",
                topFont: "Hanover-7:5", 

                bottom: "Repair",
                bottomFont: "Hanover-7:5"
            }
        }
    }
}

EDSImages.TTSG = {
    blank: [[0]
     ],
    ChangiAirportControlTower: [
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
        [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0],
        [0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    ],
    DDBusIcon: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1],
        [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1],
        [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1],
        [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    Chingay50Logo1: [ // Side EDS
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0],
        [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    Chingay50Logo2: [ // Front EDS
        [0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0],
        [1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    Chingay50Logo9: [ // Fireworks/Star only
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], 
        [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    Chingay50Logo3: [ // Fireworks/Star only
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], 
        [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    TTSRoundel: [ //TTS Roundel
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],  
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], 
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],  
        [0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0],
        [0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
        [1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1],
        [1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],  
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], 
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],  
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],  
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], 
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],   
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],  
    ],
}
