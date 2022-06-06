var MyCalendarThree = function() {
    this.times = {}
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {number}
 */
MyCalendarThree.prototype.book = function(start, end) {
    this.times[start] = (this.times[start] || 0) + 1
    this.times[end] = (this.times[end] || 0) - 1
    let max = 0, total = 0
    for (const key in this.times) {
        total += this.times[key]
        if (total > max) {
            max = total
        }
    }
    return max;
};

/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */