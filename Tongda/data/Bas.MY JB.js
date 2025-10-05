EDSFormats['Bas.MY JB'] = {
    standardService: {
        serviceNumber: {
            align: "right",
            margin: {
                right: 0
            },
            text: "$serviceNumber",
            font: "Tongda-16:7",
            spacing: 2
        },
        destination: {
            align: "centre-x,top",
            margin: {
                right: 'width(serviceNumber)'
            },
            text: "$destination",
            font: {
                $$cond: {
                    "$destFont === null": "Mobitec-7:4",
                    "else": "$destFont"
                }
            },
            spacing: 1
        },
        scroll: {
            align: "centre-x,bottom",
            margin: {
                right: 'width(serviceNumber)'
            },
            scrolls: "$scrolls",
            rotate: true,
            rotateSpeed: 2500,

            font: "Mobitec-Tower6:4",
            spacing: 1
        },

        text: "$serviceNumber+' '+$destination"
        
    },
    destScroll: {
        serviceNumber: {
            align: "left",
            margin: {
                left: 0
            },
            text: "$serviceNumber",
            font: "Tongda-16:7",
            spacing: 1
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
                    "$topFont === null": "Tongda-16:7",
                    "else": "$topFont"
                }
            },
            spacing: 1,
            margin: {
                left: 'width(serviceNumber)'
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
                    "$bottomFont === null": "Mobitec-7:4",
                    "else": "$bottomFont"
                }
            },
            spacing: 1,
            margin: {
                left: 'width(serviceNumber) - width(image)'
            }
        },
        image: {
            align: "right",
            image: {
                $$cond: {
                    "$image !== null": "$image",
                    "else": "blank"
                }
            }
        },

        text: "$top+' '+$bottom+' '+$serviceNumber"
        
    },
    full: {
        __dynamic__: (matrix, data) => {
            matrixPrimitives.setStrokeColour(null);
            matrixPrimitives.fillRectangle(matrix, 0, 0, matrix.width, matrix.height);
        },
        text: "All LED Lit"
    },
    scrollingDest: {
        __dynamic__: (matrix, data) => {
            let serviceNum = new TextObject(data.serviceNumber, Font.fromNameString("Tongda-16:7"), new Position(0, 0), 1)
            let destination = new TextObject(data.destination, Font.fromNameString("Tongda-16:7"), new Position(matrix.width, 0), 1)

            let serviceWidth = serviceNum.takeMeasure().width + 3
            let destinationWidth = destination.takeMeasure().width

            let framesNeeded = matrix.width + destinationWidth - serviceWidth
            let currentFrame = 0

            function drawFrame(frame) {
                destination.position.x = matrix.width - frame
                matrix.clearRectangle(0, 0, matrix.width, matrix.height)

                matrix.drawText(destination)
                
                matrix.clearRectangle(0, 0, serviceWidth, matrix.height)
                matrix.drawText(serviceNum)
            }

            if (matrix === window.controllerPreview) {
                return drawFrame(matrix.width - serviceWidth - 2)
            }

            __scrollingInterval__ = setInterval(() => {
                drawFrame(currentFrame++)
                if (currentFrame === framesNeeded) currentFrame = 0
            }, 50)
        },
        text: "$serviceNumber+' '+$destination"
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

EDSData['Bas.MY JB'] = {
    0: {
        front: {
            renderType: "standardService",
            serviceNumber: "",
            destination: "WELCOME PAGE",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "BAS.MY JB",
                    top: "Tekan butang F1",
                    topFont: "Hanover-7:3",
                    bottom: "untuk memilih laluan",
                    bottomFont: "Hanover-7:3",
                }, 
                {
                    renderType: "destScroll",
                    serviceNumber: "BAS.MY JB",
                    top: "Press the F1 button",
                    topFont: "Hanover-7:3",
                    bottom: "to select service",
                    bottomFont: "Hanover-7:3",
                }, 
            ]
        }
    },
    100: {
        front: {
            renderType: "scrollingDest",
            serviceNumber: "J10",
            destination: "JB SENTRAL < > TER. KOTA TINGGI"
        }
    },
    101: {
        front: {
            renderType: "standardService",
            serviceNumber: "J10",
            destination: "KOTA TINGGI",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "J10",
                    top: "TER. KOTA TINGGI",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    102: {
        front: {
            renderType: "standardService",
            serviceNumber: "J10",
            destination: "JB SENTRAL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "J10",
                    top: "JB SENTRAL",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    110: {
        front: {
            renderType: "scrollingDest",
            serviceNumber: "J11",
            destination: "JB SENTRAL < > AEON DATO ONN"
        }
    },
    111: {
        front: {
            renderType: "standardService",
            serviceNumber: "J11",
            destination: "AEON DATO ONN",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "J11",
                    top: "AEON DATO ONN",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    112: {
        front: {
            renderType: "standardService",
            serviceNumber: "J11",
            destination: "JB SENTRAL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "J11",
                    top: "JB SENTRAL",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    130: {
        front: {
            renderType: "scrollingDest",
            serviceNumber: "J13",
            destination: "LARKIN SENTRAL < > JB SENTRAL"
        }
    },
    131: {
        front: {
            renderType: "standardService",
            serviceNumber: "J13",
            destination: "JB SENTRAL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "J13",
                    top: "JB SENTRAL",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    132: {
        front: {
            renderType: "standardService",
            serviceNumber: "J13",
            destination: "LARKIN SENTRAL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "J13",
                    top: "LARKIN SENTRAL",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    150: {
        front: {
            renderType: "scrollingDest",
            serviceNumber: "J15",
            destination: "JB SENTRAL < > MID VALLEY"
        }
    },
    151: {
        front: {
            renderType: "standardService",
            serviceNumber: "J15",
            destination: "MID VALLEY",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "J15",
                    top: "MID VALLEY",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    152: {
        front: {
            renderType: "standardService",
            serviceNumber: "J15",
            destination: "JB SENTRAL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "J15",
                    top: "JB SENTRAL",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    160: {
        front: {
            renderType: "scrollingDest",
            serviceNumber: "J16",
            destination: "B5 ST MARKET < > TOPPEN/IKEA"
        }
    },
    161: {
        front: {
            renderType: "standardService",
            serviceNumber: "J16",
            destination: "TOPPEN/IKEA",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "J16",
                    top: "TOPPEN/IKEA",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    162: {
        front: {
            renderType: "standardService",
            serviceNumber: "J16",
            destination: "B5 ST MARKET",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "J16",
                    top: "B5 ST MARKET",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    200: {
        front: {
            renderType: "scrollingDest",
            serviceNumber: "J20",
            destination: "JB SENTRAL < > TER. MASAI"
        }
    },
    201: {
        front: {
            renderType: "standardService",
            serviceNumber: "J20",
            destination: "TER. MASAI",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "J20",
                    top: "TER. MASAI",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    202: {
        front: {
            renderType: "standardService",
            serviceNumber: "J20",
            destination: "JB SENTRAL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "J20",
                    top: "JB SENTRAL",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    210: {
        front: {
            renderType: "scrollingDest",
            serviceNumber: "J21",
            destination: "JB SENTRAL < > PERMAS JAYA"
        }
    },
    211: {
        front: {
            renderType: "standardService",
            serviceNumber: "J21",
            destination: "PERMAS JAYA",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "J21",
                    top: "PERMAS JAYA",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    212: {
        front: {
            renderType: "standardService",
            serviceNumber: "J21",
            destination: "JB SENTRAL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "J21",
                    top: "JB SENTRAL",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    220: {
        front: {
            renderType: "scrollingDest",
            serviceNumber: "J22",
            destination: "TMN SCIENTEX < > JB SENTRAL"
        }
    },
    221: {
        front: {
            renderType: "standardService",
            serviceNumber: "J22",
            destination: "JB SENTRAL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "J22",
                    top: "JB SENTRAL",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    222: {
        front: {
            renderType: "standardService",
            serviceNumber: "J22",
            destination: "TMN SCIENTEX",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "J22",
                    top: "TMN SCIENTEX",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    300: {
        front: {
            renderType: "scrollingDest",
            serviceNumber: "J30",
            destination: "JB SENTRAL < > TER. KULAI"
        }
    },
    301: {
        front: {
            renderType: "standardService",
            serviceNumber: "J30",
            destination: "TER. KULAI",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "J30",
                    top: "TER. KULAI",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    302: {
        front: {
            renderType: "standardService",
            serviceNumber: "J30",
            destination: "JB SENTRAL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "J30",
                    top: "JB SENTRAL",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    310: {
        front: {
            renderType: "scrollingDest",
            serviceNumber: "J31",
            destination: "PULAI MUTIARA < > JB SENTRAL"
        }
    },    
    311: {
        front: {
            renderType: "standardService",
            serviceNumber: "J31",
            destination: "JB SENTRAL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "J31",
                    top: "JB SENTRAL",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    312: {
        front: {
            renderType: "standardService",
            serviceNumber: "J31",
            destination: "PULAI MUTIARA",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "J31",
                    top: "PULAI MUTIARA",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },

    320: {
        front: {
            renderType: "scrollingDest",
            serviceNumber: "J32",
            destination: "SELESA JAYA < > JB SENTRAL"
        }
    },
    321: {
        front: {
            renderType: "standardService",
            serviceNumber: "J32",
            destination: "JB SENTRAL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "J32",
                    top: "JB SENTRAL",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    322: {
        front: {
            renderType: "standardService",
            serviceNumber: "J32",
            destination: "SELESA JAYA",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "J32",
                    top: "SELESA JAYA",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    330: {
        front: {
            renderType: "scrollingDest",
            serviceNumber: "J33",
            destination: "JB SENTRAL < > TMN TAN SRI YAACOOB"
        }
    },
    331: {
        front: {
            renderType: "standardService",
            serviceNumber: "J33",
            destination: "TMN TAN SRI YAACOOB",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "J33",
                    top: "TAN SRI YAACOOB",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    332: {
        front: {
            renderType: "standardService",
            serviceNumber: "J33",
            destination: "JB SENTRAL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "J33",
                    top: "JB SENTRAL",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    340: {
        front: {
            renderType: "scrollingDest",
            serviceNumber: "J34",
            destination: "JB SENTRAL < > SUTERA MALL"
        }
    },
    341: {
        front: {
            renderType: "standardService",
            serviceNumber: "J34",
            destination: "SUTERA MALL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "J34",
                    top: "SUTERA MALL",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    342: {
        front: {
            renderType: "standardService",
            serviceNumber: "J34",
            destination: "JB SENTRAL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "J34",
                    top: "JB SENTRAL",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    400: {
        front: {
            renderType: "scrollingDest",
            serviceNumber: "J40",
            destination: "LARKIN SENTRAL < > GP SENTRAL"
        }
    },
    401: {
        front: {
            renderType: "standardService",
            serviceNumber: "J40",
            destination: "GP SENTRAL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "J40",
                    top: "GP SENTRAL",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    402: {
        front: {
            renderType: "standardService",
            serviceNumber: "J40",
            destination: "LARKIN SENTRAL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "J40",
                    top: "LARKIN SENTRAL",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    420: {
        front: {
            renderType: "scrollingDest",
            serviceNumber: "J42",
            destination: "TER. GELANG PATAH < > PENDAS"
        }
    },
    421: {
        front: {
            renderType: "standardService",
            serviceNumber: "J42",
            destination: "PENDAS",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "J42",
                    top: "PENDAS",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    422: {
        front: {
            renderType: "standardService",
            serviceNumber: "J42",
            destination: "TER. GELANG PATAH",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "J42",
                    top: "TER.GELANG PATAH",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    440: { // TBC
        front: {
            renderType: "scrollingDest",
            serviceNumber: "J44",
            destination: "LARKIN SENTRAL < > PUTERI HARBOUR"
        }
    },
    441: {
        front: {
            renderType: "standardService",
            serviceNumber: "J44",
            destination: "PUTERI HARBOUR",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "J44",
                    top: "PUTERI HARBOUR",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    442: {
        front: {
            renderType: "standardService",
            serviceNumber: "J42",
            destination: "LARKIN SENTRAL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "J44",
                    top: "LARKIN SENTRAL",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    500: { // TBC
        front: {
            renderType: "scrollingDest",
            serviceNumber: "J50",
            destination: "LARKIN SENTRAL < > PONTIAN"
        }
    },
    501: {
        front: {
            renderType: "standardService",
            serviceNumber: "J40",
            destination: "PONTIAN",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "J50",
                    top: "PONTIAN",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    502: {
        front: {
            renderType: "standardService",
            serviceNumber: "J50",
            destination: "LARKIN SENTRAL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "J50",
                    top: "LARKIN SENTRAL",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    1000: {
        front: {
            renderType: "scrollingDest",
            serviceNumber: "J100",
            destination: "KSL MALL < > JB SENTRAL"
        }
    },
    1001: {
        front: {
            renderType: "standardService",
            serviceNumber: "J100",
            destination: "JB SENTRAL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "J100",
                    top: "JB SENTRAL",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    1002: {
        front: {
            renderType: "standardService",
            serviceNumber: "J100",
            destination: "KSL MALL",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "J100",
                    top: "KSL MALL",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    2000: { // TBC
        front: {
            renderType: "scrollingDest",
            serviceNumber: "J200",
            destination: "TER. MASAI < > SERI ALAM"
        }
    },
    2050: { // TBC
        front: {
            renderType: "scrollingDest",
            serviceNumber: "J205",
            destination: "TER. MASAI < > LOTUS KOTA MASAI"
        }
    },
    2051: { // TBC
        front: {
            renderType: "standardService",
            serviceNumber: "J205",
            destination: "LOTUS KOTA MASAI",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "J205",
                    top: "LOTUS K. MASAI",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    2052: { // TBC
        front: {
            renderType: "standardService",
            serviceNumber: "J205",
            destination: "TER. MASAI",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "J205",
                    top: "TER. MASAI",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
    3000: { // TBC
        front: {
            renderType: "standardService",
            serviceNumber: "J300",
            destination: "TER. KULAI",
            scrolls: [
                {
                    renderType: "destScroll",
                    serviceNumber: "J300",
                    top: "TER. KULAI",
                    topFont: "Tongda-16:7",
                },
            ]
        }
    },
}

EDSExtras['Bas.MY JB'] = {
}

EDSImages['Bas.MY JB'] = {
"blank": [
    [0]
]
}
