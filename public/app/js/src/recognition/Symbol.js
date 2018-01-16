const SymbolTypes = require('./enums/SymbolTypes');
const RegionTypes = require('./enums/RegionTypes');

class Symbol {
    /**
     * Abstract Symbol instance.
     * //might require name change to a line
     * @param x
     * @param y
     * @param width
     * @param height
     * @param value
     * @param type
     */
    constructor(x, y, width, height, value, type) {
        if (this.constructor === Symbol) {
            throw new Error("Abstract Class Instatiation Error");
        }
        this.type = type;
        this.minX = x;
        this.minY = y;
        this.maxX = x + width;
        this.maxY = y + height;
        this.value = value;
        this.width = width;
        this.height = height;
        this.x = (this.minX + this.maxX)/2;
        this.y = (this.minY + this.maxY)/2;
        this.region = {};
        for (var region in RegionTypes) {
            this.region[RegionTypes[region]] = new Expression(RegionTypes[region]);
        }
        this.wall = {};
        this.size = width * height;
    }

    /**
     * Returns true iff it has any elements at top
     * @returns {boolean}
     */
    hasAnyTop() {
        return this.region.tleft.hasElement() || this.region.above.hasElement() || this.region.supers.hasElement();
    }

    /**
     * Returns true iff it has any elements at bottom
     * @returns {boolean}
     */
    hasAnyBottom() {
        return this.region.bleft.hasElement() || this.region.below.hasElement() || this.region.subsc.hasElement();
    }

    /** 
     * Sets the wall of this Symbol.
     * @param wall
     */
    setWall(wall) {
        this.wall.top = wall.top;
        this.wall.bottom = wall.bottom;
        this.wall.left = wall.left;
        this.wall.right = wall.right;
    }
    /**
     * Returns a copy of this Symbol's wall
     * @returns {Object}
     */
    getWallCopy() {
        return {
            'top': this.wall.top,
            'bottom': this.wall.bottom,
            'left': this.wall.left,
            'right': this.wall.right,
        };
    }
    /**
     * Applies func for each regions and symbol.
     * @param func
     * @param regionCondFunc
     * @param condFunc
     */
    apply(func, regionCondFunc, condFunc) {
        for (var region_name in this.region){
            if (this.region[region_name].hasElement()) {
                var b = regionCondFunc(this.region[region_name]);
                var combinedCondFunc = function(symbol) {
                    var res = b && condFunc(symbol);
                    return res;
                };
                //if(b)
                    //  this.region[region_name].apply(func, function(region){return true}, combinedCondFunc);
                //else
                    this.region[region_name].apply(func, regionCondFunc, combinedCondFunc);
            }
        }
    }
}
module.exports = Symbol;


// function Symbol(x, y, width, height, value) {    
//     if (this.constructor === Symbol) {
//         throw new Error("Abstract Class Instatiation Error");
//     }
//     this.minX = x;
//     this.minY = y;
//     this.maxX = x + width;
//     this.maxY = y + height;
//     this.value = value;
//     this.width = width;
//     this.height = height;
//     this.x = (this.minX + this.maxX)/2;
//     this.y = (this.minY + this.maxY)/2;
//     this.region = {};
//     for (var region in REGION_NAMES) {
//         this.region[REGION_NAMES[region]] = new Expression(REGION_NAMES[region]);
//     }
//     this.wall = {};
//     this.size = width * height;
//     //delete(this.region.root);
// }

// // Symbol.prototype.distanceFrom = function(other) {
// //     var maxXDistance = Math.max(Math.abs(this.minX - other.maxX), Math.abs(this.maxX - other.minX));
// //     var maxYDistance = Math.max(Math.abs(this.minY - other.maxY), Math.abs(this.maxY - other.minY));
// //     var minXDistance = Math.min(Math.abs(this.minX - other.maxX), Math.abs(this.maxX - other.minX));
// //     var minYDistance = Math.min(Math.abs(this.minY - other.maxY), Math.abs(this.maxY - other.minY));
// //     var distances = {
// //         distance: Math.sqrt(Math.pow(Math.abs((this.x - other.x)), 2) + Math.pow(Math.abs((this.y - other.y)), 2)),
// //         maxDistance: Math.sqrt(maxXDistance * maxXDistance + maxYDistance * maxYDistance),
// //         minDistance: Math.sqrt(minXDistance * minXDistance + minYDistance * minYDistance)
// //     }
// // }


// // Symbol.prototype.hasAnyTop = function() {
// //     return this.region.tleft.hasElement() || this.region.above.hasElement() || this.region.supers.hasElement();
// // }

// // Symbol.prototype.hasAnyBottom = function() {
// //     return this.region.bleft.hasElement() || this.region.below.hasElement() || this.region.subsc.hasElement();
// // }

// // Symbol.prototype.setWall = function(wall) {
// //     this.wall.top = wall.top;
// //     this.wall.bottom = wall.bottom;
// //     this.wall.left = wall.left;
// //     this.wall.right = wall.right;
// // }

// // Symbol.prototype.getWallCopy = function() {
// //     return {
// //         'top': this.wall.top,
// //         'bottom': this.wall.bottom,
// //         'left': this.wall.left,
// //         'right': this.wall.right,
// //     };
// // }

// // /**
// //   * This calls applies for each regions with func and condFunc.
// //  */
// // Symbol.prototype.apply = function(func, regionCondFunc, condFunc) {
// //     for (var region_name in this.region){
// //         if (this.region[region_name].hasElement()) {
// //             var b = regionCondFunc(this.region[region_name]);
// //             var combinedCondFunc = function(symbol) {
// //                 var res = b && condFunc(symbol);
// //                 return res;
// //             };
// //             //if(b)
// //               //  this.region[region_name].apply(func, function(region){return true}, combinedCondFunc);
// //             //else
// //                 this.region[region_name].apply(func, regionCondFunc, combinedCondFunc);
// //         }
// //     }
// // } 