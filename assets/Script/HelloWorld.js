cc.Class({
    extends: cc.Component,

    properties: {
        list:cc.ScrollView,
        cell:cc.Node
    },

    // use this for initialization
    onLoad: function () {
        this._cellCount = 30;
        let cellSize = this.cell.getContentSize();
        this.cell.active = false;
        var handler = function (funcName, list, index) {
            switch (funcName) {
                case "count":
                    return this._cellCount;
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
        this.list.node.on("bounce-top", function(){
            this.list.getComponent("MyList").reloadData();
        }.bind(this));
        this.list.node.on("bounce-bottom", function(){
            this._cellCount += 30;
            var curPosition = this.list.content.getPosition();
            this.list.getComponent("MyList").reloadData();
            this.list.content.position = curPosition;
        }.bind(this));
    },

    // called every frame
    update: function (dt) {

    },
});
