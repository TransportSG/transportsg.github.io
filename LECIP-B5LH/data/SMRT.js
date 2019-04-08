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
                right: 'width(serviceNumber) + len(7)'
            },
            text: "$destination",
            spacing: 1
        },
        scroll: {
            align: "centre-x,top",
            margin: {
                top: 14,
                right: 'width(serviceNumber) + len(7)'
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
            function paint() {
                matrix.inverted = !matrix.inverted;
                matrix.clearRectangle(0, 0, matrix.width, matrix.height);
                matrix.inverted = !matrix.inverted;

                matrixPrimitives.setStrokeColour(0x84e76e);
                matrixPrimitives.strokeRectangle(matrix, 0, 0, 32, 16);

                matrix.drawText(data.serviceNumber, 'LECIP-PIDS-7:13', 1, 5, 1, 0xffffff);

                matrix.drawText(data.destination, 'LECIP-PIDS-5:13', 1, 33, 1, 0xffffff);
                let currentScroll = Math.floor(scrollNum / 3);
                matrix.drawText(data.scrolls[currentScroll], 'LECIP-PIDS-5:13', 1, 33, 17, 0xffffff);

                let bottomRowNum = scrollNum % 3;

                if (bottomRowNum == 0)
                    matrix.drawText('NEXT>>', 'LECIP-PIDS-5:13', 1, 1, 17, 0xffffff);
                else if (bottomRowNum == 1)
                    matrix.drawText('STOP>>', 'LECIP-PIDS-5:13', 1, 1, 17, 0xe35f57);
                else if (bottomRowNum == 2)
                    matrix.drawText('Arr>>', 'LECIP-PIDS-5:13', 2, 4, 17, 0xeae44a);

                scrollNum++;
                if (scrollNum >= data.scrolls.length * 3)
                    scrollNum = 0;
            }

            let scrollNum = 0;
            setInterval(paint, 2000);

            paint();
        }
    }
}

EDSData.SMRT = {
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
                    'PETIR / JELUBU RD',
                    'SENJA RD / LINK',
                    'JELAPANG RD',
                    'SAUJANA RD',
                    'FAJAR RD',
                    'BT PANJANG RING RD',
                    'BANGKIT RD',
                ],
                scrollFont: 'Arial-8'
            },

            pids: {
                renderType: "pids",
                serviceNumber: "920",
                destination: "BT PANJANG INT",
                scrolls: [
                    // "BT PANJANG INT",
                    // "OPP BT PANJANG PLAZA",
                    // "BLK 602",
                    // "WEST VIEW PR SCH",
                    // "OPP BLK 628",
                    // "BLK 636A",
                    // "WEST SPRING SEC SCH",
                    // "BLK 651",
                    // "BLK 532",
                    // "BET BLKS 502/503",
                    // "BLK 413",
                    // "BET BLKS 443A/443B",
                    // "BLK 442D",
                    // "BANGKIT STN",
                    // "OPP BLK 271",
                    // "OPP BLK 253",
                    // "OPP BANGKIT STN",
                    // "BLK 239",
                    // "BLK 401A CP",
                    // "BLK 408",
                    // "OPP BLK 502",
                    // "OPP BLK 532",
                    // "OPP BLK 650",
                    // "OPP WEST SPRING SEC SCH",
                    // "BEF BLK 629A MSCP",
                    // "BLK 628",
                    "BLK 610",
                    "BLK 541A CP",
                    "BT PANJANG PLAZA",
                    "BT PANJANG INT"
                ]
            }
        }
    }
};
