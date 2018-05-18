cc.Class({
    extends: cc.Component,

    properties: {
        list:cc.ScrollView,
        cell:cc.Node,
    },

    // use this for initialization
    onLoad: function () {
        let cellSize = this.cell.getContentSize();
        this.cell.active = false;
        var handler = function (funcName, list, index) {
            switch (funcName) {
                case "count":
                    return 50;
                case "cellSize":
                    return cellSize;
                case "cell":
                    let cell = cc.instantiate(this.cell);
                    cell.active = true;
                    cell.getChildByName("indexLabel").getComponent(cc.Label).string = index;
                    return cell;
            }
        }.bind(this);
        this.list.getComponent("MyList").setHandler(handler);
        this.list.getComponent("MyList").reloadData();
    },

    // called every frame
    update: function (dt) {

    },
});
