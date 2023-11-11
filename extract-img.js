var fs = require('fs'),
PNG = require('pngjs').PNG;

function a(loc) {
    fs.createReadStream(loc)
    .pipe(new PNG())
    .on('parsed', function() {

        let out = []
        for (var y = 0; y < this.height; y++) {
            out.push([])
            for (var x = 0; x < this.width; x++) {
                var idx = (this.width * y + x) << 2;

                out[y][x] = (this.data[idx] > 120) ? 1 : 0
            }
        }

        console.log('[' + out.map(line => line.join(', ')).join('],\n[') + ']')
    });
}

a(process.argv[2])