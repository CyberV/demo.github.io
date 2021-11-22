ej.base.enableRipple(window.ripple)
/**
 *  Sample for default functionalities
 * 
 * 
 */

    var dashboard = new ej.layouts.DashboardLayout({
        cellSpacing: [5, 5],
        columns: 5,
        allowResizing: true,
    });
    dashboard.appendTo('#defaultLayout');
    var dashboardObject = document.getElementById('defaultLayout').ej2_instances[0];
    var count = 8;
    document.getElementById('add').onclick = function (e) {
        var panel = [{
            'id': count.toString() + '_layout', 'sizeX': 1, 'sizeY': 1, 'row': 0, 'col': 0,
            content: '<span id="close" class="e-template-icon e-clear-icon"></span><div class="text-align">' + count.toString() + '</div>'
        }];
        dashboardObject.addPanel(panel[0]);
        var closeIcon = document.getElementById(count.toString() + '_layout').querySelector('.e-clear-icon');
        closeIcon.addEventListener('click', onCloseIconHandler);
        count = count + 1;
    };

    document.getElementById('addTicket').onclick =function (e) {
        let xx = {Assignee:  '',
        ClassName: "e-story, e-low, e-nancy-davloio",
        Color: "#02897B",
        Estimate: 3.5,
        Id: "Task " + (kanbanObj.kanbanData.length + 1) ,
        Priority: "Low",
        RankId: 1,
        Status: "Open",
        Summary: defaultRTE.getText(),
        Tags: "Analyze,Customer",
        Title: "Task - 29001",
        Type: "Story",
    }
    kanbanObj.openDialog('Add', xx);
    defaultRTE.value = '';

    }
        function onCloseIconHandler(event) {
        if (event.target.offsetParent) {
            dashboardObject.removePanel(event.target.offsetParent.id);
        }

    }
    var closeElement = document.querySelectorAll('.e-clear-icon');
    for (var i = 0; i < closeElement.length; i++) {
        closeElement[i].addEventListener('click', onCloseIconHandler);
    }

    var data = ej.base.extend([], window.kanbanData, null, true); // To maintain the property changes, extend the object. 
    var kanbanObj = new ej.kanban.Kanban({
        dataSource: data,
        keyField: 'Status',
        swimlaneSettings: {
            keyField: 'Assignee',
            allowDragAndDrop: true
        },
        externalDropId: ['#tree1'],
        cardSettings: {
            contentField: 'Summary',
            headerField: 'Id',
        },
        columns: [
            { headerText: 'To Do', keyField: 'Open' },
            { headerText: 'In Progress', keyField: 'InProgress' },
            { headerText: 'Done', keyField: 'Close' }
        ],
        height: '500px',
        dragStop: function (args) {
            if (ej.base.closest(args.event.target, '#tree1')) {
                kanbanObj.deleteCard(args.data);
                tree1Obj.addNodes(args.data);
                args.cancel = true;
            }
        }
    });
    kanbanObj.appendTo('#Kanban');

    new ej.buttons.CheckBox({ checked: false, change: onChange }, '#acrossDragAndDrop');
    new ej.buttons.CheckBox({ checked: false, change: onChange }, '#emptyRow');
    new ej.buttons.CheckBox({ checked: true, change: onChange }, '#itemCount');
    new ej.buttons.CheckBox({ change: onChange }, '#frozenRows');
    //Initialize DropDownList control
    var sortOrder = new ej.dropdowns.DropDownList({
        width: '100%',
        change: changeSortOrder
    });
    //Render initialized DropDownList control
    sortOrder.appendTo('#sort');
    function onChange(args) {
        var value = this.element.id;
        switch (value) {
            case 'acrossDragAndDrop':
                kanbanObj.swimlaneSettings.allowDragAndDrop = args.checked;
                break;
            case 'emptyRow':
                kanbanObj.swimlaneSettings.showEmptyRow = args.checked;
                break;
            case 'itemCount':
                kanbanObj.swimlaneSettings.showItemCount = args.checked;
                break;
            case 'frozenRows':
                kanbanObj.swimlaneSettings.enableFrozenRows = args.checked;
                break;
            default:
                break;
        }
    }
    function changeSortOrder(args) {
        var sortDirection = args.itemData.value;
        kanbanObj.swimlaneSettings.sortDirection = sortDirection;
    }



    // ej.base.enableRipple(window.ripple)

    // Render the first TreeView by mapping its fields property with data source properties
    var tree1Obj = new ej.navigations.TreeView({
        fields: { dataSource:  window.productTeam1, id: 'id', text: 'name', child: 'child' },
        allowDragAndDrop: true,
        nodeDragStop: onTreeDragStop
    });
    // Render the second TreeView by mapping its fields property with data source properties
    tree1Obj.appendTo('#tree1');
    var tree2Obj =  new ej.navigations.TreeView({
        fields: { dataSource:  window.productTeam2, id: 'id', text: 'name', child: 'child' },
        allowDragAndDrop: true,
        nodeDragStop: onDragStop
    });
    tree2Obj.appendTo('#tree2');
    // Render the ListView with custom template
    var listData = [];
    var listObj = new ej.lists.ListView({
        dataSource: [],
        cssClass: 'custom-list',
        template: '<div><span>${text}</span><span id=${iconId} class=${class}></span></div>',
    });
    listObj.appendTo('#list');
    // Drop the dragged TreeView node into ListView
    var id = 1;


    function onTreeDragStop(args) {
        if (ej.base.closest(args.event.target, '#Kanban')) {
            var treeData = tree1Obj.fields.dataSource;

            let src = treeData.filter((data) => {return data.id == args.draggedNodeData.parentID})[0]
            var filteredData = src.child.filter(function (item) { return item.id === args.draggedNodeData.id });
            tree1Obj.removeNodes([args.draggedNodeData.id]);

            


        let row = ej.base.closest(event.target,'.e-content-row');
        let indxx = 0;
        let childrens = row.parentElement.children;

        for(let ii =0 ; ii<childrens.length;ii++ )
    {
            if (childrens[ii] != row) {
                indxx++;
            } else {
                break;
            }
        }

        if (indxx < row.parentElement.children.length) {
            console.log('Found row at', indxx);

           

            let xx = {Assignee:  childrens[indxx-1].getAttribute('data-key'),
            ClassName: "e-story, e-low, e-nancy-davloio",
            Color: "#02897B",
            Estimate: 3.5,
            Id: "Task " + kanbanObj.kanbanData.length,
            Priority: "Low",
            RankId: 1,
            Status: "Open",
            Summary: "Analyze new requirements from " +args.draggedNodeData.text ,
            Tags: "Analyze,Customer",
            Title: "Task - 29001",
            Type: "Story",
        }
        kanbanObj.openDialog('Add', xx);
        args.cancel = true;
        }

                    // kanbanObj.openDialog('Add', filteredData[0]);

        }
    }

    function onDragStop(event) {
        var targetEle = ej.base.closest(event.target, '.e-droppable');
        targetEle = targetEle ? targetEle : event.target;
        // Check the target as ListView or not
            if (targetEle && targetEle.classList.contains('custom-list')) {
                event.cancel = true;
                var newData = [];
                if (event.draggedNode.classList.contains('e-active')) {
                    var selNodes = this.selectedNodes;
                    for (var i = 0, len = selNodes.length; i < len; i++)    {
                        var nodeEle = document.querySelector('[data-uid="' + selNodes[i] + '"]').querySelector('.e-list-text');
                        var nodeText = nodeEle.textContent;
                        var newNode = { id: 'l' + id, text: nodeText, class: 'custom-delete', iconId: 'i' + id };
                        id++;
                        newData.push(newNode);
                    }
                }
                else {
                    var text = 'text';
                    var nodeText1 = event.draggedNodeData[text];
                    var newNode1 = { id: 'l' + id, text: nodeText1, class: 'custom-delete', iconId: 'i' + id };
                    id++;
                    newData.push(newNode1);
                }
                   // Add collection of node to ListView
                listObj.addItem(newData, undefined);
            }
        }
    // Add the custom action for delete icon in ListView
    // document.getElementById('list').addEventListener('mousedown', function (event) {
    //     if (event.target.classList.contains('custom-delete')) {
    //         var node = ej.base.closest(event.target, 'li');
    //         listObj.removeItem(node);
    //     }
    // });
    // document.getElementById('overlay').addEventListener('mousedown', function (event) {
    //     document.getElementById('overlay').style.display = 'none';
    // });



    ej.base.enableRipple(window.ripple)
/**
 * Menu - toolbar integration sample
 */


    var menuTemplate = '<ul id="menu"></ul>';
    var searchTemplate = '<div class="e-input-group"><input class="e-input" type="text" placeholder="Search" /><span class="e-input-group-icon em-icons e-search"></span></div>';
    var dropDownBtnTemplate = '<button id="userDBtn">Andrew</button>';

    // Initialize Toolbar component
    new ej.navigations.Toolbar(
        {
            created: create,
            items: [
                { template: menuTemplate },
                { template: searchTemplate, align: 'right' },
                { template: dropDownBtnTemplate, align: 'right' },
                { prefixIcon: 'em-icons e-shopping-cart', align: 'right' },
            ]
        },
        '#shoppingtoolbar');

    function create() {
        // Menu items definition 
        var menuItems = [
            {
                text: 'Appliances',
                items: [
                    { 
                        text: 'Kitchen',
                        items: [
                            { text: 'Electric Cookers' },
                            { text: 'Coffee Makers' },
                            { text: 'Blenders' }
                        ]
                    },
                    { 
                        text: 'Washing Machine',
                        items: [
                            { text: 'Fully Automatic' },
                            { text: 'Semi Automatic' }
                        ]
                    },
                    { 
                        text: 'Air Conditioners',
                        items: [
                            { text: 'Inverter ACs' },
                            { text: 'Split ACs' },
                            { text: 'Window ACs' }
                        ]
                    }
                ]
            },
            { 
                text: 'Accessories',
                items: [
                    { 
                        text: 'Mobile',
                        items: [
                            { text: 'Headphones' },
                            { text: 'Memory Cards' },
                            { text: 'Power Banks' }
                        ]
                    },
                    { 
                        text: 'Computer',
                        items: [
                            { text: 'Pendrives' },
                            { text: 'External Hard Disks' },
                            { text: 'Monitors' }
                        ]
                    }
                ]
            },
            { 
                text: 'Fashion',
                items: [
                    { 
                        text: 'Men',
                        items: [
                            { text: 'Shirts' },
                            { text: 'Jackets' },
                            { text: 'Track Suits' }
                        ]
                    },
                    { 
                        text: 'Women',
                        items: [
                            { text: 'Kurtas' },
                            { text: 'Salwars' },
                            { text: 'Sarees' }
                        ]
                    }
                ]
            },
            { 
                text: 'Home & Living',
                items: [
                    { 
                        text: 'Furniture',
                        items: [
                            { text: 'Beds' },
                            { text: 'Mattresses' },
                            { text: 'Dining Tables' }
                        ]
                    },
                    { 
                        text: 'Decor',
                        items: [
                            { text: 'Clocks' },
                            { text: 'Wall Decals' },
                            { text: 'Paintings' }
                        ]
                    }
                ]
            }
        ];

        var userData = [
            { text: 'My Profile' },
            { text: 'Orders' },
            { text: 'Rewards' },
            { text: 'Logout' }
        ];

        // Initialize Menu component
        new ej.navigations.Menu({ items: menuItems }, '#menu');

        // Initialize DropDownButton component
        new ej.splitbuttons.DropDownButton({ items: userData }, '#userDBtn');

        this.refreshOverflow();
        this.element.querySelector('.e-shopping-cart').classList.remove('e-icons');
    }


    ej.base.enableRipple(window.ripple)
/*jshint esversion: 6 */
/**
 * Rich Text Editor Quick toolbar sample
 */

    var defaultRTE = new ej.richtexteditor.RichTextEditor({
        toolbar: {
            enable : false
        },
        quickToolbarSettings: {
            image: [
                'Replace', 'Align', 'Caption', 'Remove', 'InsertLink', '|', 'Display', 'AltText', 'Dimension',
                {
                    tooltipText: 'Rotate Left',
                    template: '<button class="e-tbar-btn e-btn" id="roatateLeft"><span class="e-btn-icon e-icons e-roatate-left"></span>'
                },
                {
                    tooltipText: 'Rotate Right',
                    template: '<button class="e-tbar-btn e-btn" id="roatateRight"><span class="e-btn-icon e-icons e-roatate-right"></span>'
                }
            ]
        },
        created: oncreate
    });
    defaultRTE.appendTo('#defaultRTE');
    defaultRTE.hideInlineToolbar();
    function oncreate() {
        // document.getElementById('rteImageID').onclick = function (e) {
        //     var rotateLeft = document.getElementById('roatateLeft');
        //     var rotateRight = document.getElementById('roatateRight');
        //     rotateLeft.onclick = function (e) {
        //         var imgEle = document.getElementById('rteImageID');
        //         var transform = Math.abs(parseInt(imgEle.style.transform.split('(')[1].split(')')[0], 10));
        //         imgEle.style.transform = 'rotate(-' + (transform + 90) + 'deg)';
        //     };
        //     rotateRight.onclick = function (e) {
        //         var imgEle = document.getElementById('rteImageID');
        //         var transform = parseInt(imgEle.style.transform.split('(')[1].split(')')[0], 10);
        //         imgEle.style.transform = 'rotate(' + (transform + 90) + 'deg)';
        //     };
        // };
    }

    

    ej.base.enableRipple(window.ripple)

    var treemap = new ej.treemap.TreeMap({
        // custom code start
        load: function(args) {
            var colormappingtheme = location.hash.split('/')[1];
            colormappingtheme = colormappingtheme ? colormappingtheme : 'Material';
            args.treemap.theme = (colormappingtheme.charAt(0).toUpperCase() +
            colormappingtheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        },
        // custom code end
        titleSettings: {
            text: 'Top 10 largest islands in the World',
            textStyle: { size: '15px' }
        },
        format: 'n',
        useGroupingSeparator: true,
        rangeColorValuePath: 'Area',
        dataSource: window.ColorMapping,
        legendSettings: {
            visible: true,
            position: 'Bottom',
            mode: 'Interactive',
            height: '10',
            title: {
                text: 'Area'
            },
        },
        tooltipSettings: {
            visible: true,
            format: 'Name: ${Name}<br>Area: ${Area} per square kms<br>Continent: ${Location}',
            opacity: 0.8
        },
        weightValuePath: 'Area',
        leafItemSettings: {
            labelPath: 'Name',
            border: { color: 'white', width: 0.5 },
            colorMapping: [
                { from: 100000, to: 250000, label: '0.1M - 0.25M', color: '#547C84' },
                { from: 250000, to: 550000, label: '0.25M - 0.55M', color: '#37AFAB' },
                { from: 550000, to: 750000, label: '0.55M - 0.75M', color: '#A4D6AD' },
                { from: 750000, to: 2250000, label: '0.75M - 2M', color: '#DEEBAE' },
                { to: null, from: null, color: 'null' },
                { to: null, from: null, color: 'null' },
            ]
        },
    });
    treemap.appendTo('#default-container');
    // code for property panel
    var opacity;
    var highlightCheckBox = new ej.buttons.CheckBox({
        change: opacity, checked: false
    }, '#opacity');
    highlightCheckBox.change = opacity = function (e) {
        var minOpacity = document.getElementById('minopacity');
        var maxOpacity = document.getElementById('maxopacity');
        if (e.checked) {
            document.getElementById('text3').style.display = 'block';
            document.getElementById('input3').style.display = 'block';
            document.getElementById('text2').style.display = 'block';
            document.getElementById('input2').style.display = 'block';
            treemap.leafItemSettings.colorMapping[0].minOpacity = parseFloat(minOpacity.value);
            treemap.leafItemSettings.colorMapping[0].maxOpacity = parseFloat(maxOpacity.value);
            treemap.leafItemSettings.colorMapping[1].minOpacity = parseFloat(minOpacity.value);
            treemap.leafItemSettings.colorMapping[1].maxOpacity = parseFloat(maxOpacity.value);
            minOpacity.disabled = false;
            maxOpacity.disabled = false;
        }
        else {
            document.getElementById('text2').style.display = 'none';
            document.getElementById('input2').style.display = 'none';
            document.getElementById('text3').style.display = 'none';
            document.getElementById('input3').style.display = 'none';
            treemap.leafItemSettings.colorMapping[0].minOpacity = null;
            treemap.leafItemSettings.colorMapping[0].maxOpacity = null;
            treemap.leafItemSettings.colorMapping[1].minOpacity = null;
            treemap.leafItemSettings.colorMapping[1].maxOpacity = null;
            minOpacity.disabled = true;
            maxOpacity.disabled = true;
        }
        treemap.refresh();
    };
    //document.getElementById('minopacity').onpointermove = document.getElementById('minopacity').ontouchmove =
        // document.getElementById('minopacity').onchange = function () {
        //     if (highlightCheckBox.checked && !highlightCheckBox.disabled) {
        //         var slider = document.getElementById('minopacity');
        //         var minOpacity = parseFloat(slider.value);
        //         treemap.leafItemSettings.colorMapping[0].minOpacity = minOpacity;
        //         treemap.leafItemSettings.colorMapping[1].minOpacity = minOpacity;
        //         treemap.refresh();
        //     }            
        // };
    //document.getElementById('maxopacity').onpointermove = document.getElementById('maxopacity').ontouchmove =
        // document.getElementById('maxopacity').onchange = function () {
        //     if (highlightCheckBox.checked && !highlightCheckBox.disabled) {
        //         var slider = document.getElementById('maxopacity');
        //         var maxOpacity = parseFloat(slider.value);
        //         treemap.leafItemSettings.colorMapping[0].maxOpacity = maxOpacity;
        //         treemap.leafItemSettings.colorMapping[1].maxOpacity = maxOpacity;
        //         treemap.refresh();
        //     }
        // };
    var sampleValue = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Range ColorMaping',
        width: '110%',
        change: function () {
            var element = sampleValue.value.toString();
            if (element === 'RangeColorMapping') {
                document.getElementById('text3').style.display = 'none';
                document.getElementById('input3').style.display = 'none';
                document.getElementById('text1').style.display = 'none';
                document.getElementById('input1').style.display = 'none';
                document.getElementById('text2').style.display = 'none';
                document.getElementById('input2').style.display = 'none';
                treemap.rangeColorValuePath = 'Area';
                treemap.leafItemSettings.colorMapping[2].minOpacity = null;
                treemap.leafItemSettings.colorMapping[2].maxOpacity = null;
                treemap.leafItemSettings.colorMapping[1].minOpacity = null;
                treemap.leafItemSettings.colorMapping[1].maxOpacity = null;
                treemap.leafItemSettings.colorMapping[4].minOpacity = null;
                treemap.leafItemSettings.colorMapping[4].maxOpacity = null;
                treemap.leafItemSettings.colorMapping[3].minOpacity = null;
                treemap.leafItemSettings.colorMapping[3].maxOpacity = null;
                treemap.leafItemSettings.colorMapping[5].minOpacity = null;
                treemap.leafItemSettings.colorMapping[5].maxOpacity = null;
                treemap.leafItemSettings.colorMapping[0].from = 100000;
                treemap.leafItemSettings.colorMapping[0].to = 250000;
                treemap.leafItemSettings.colorMapping[0].value = null;
                treemap.leafItemSettings.colorMapping[0].minOpacity = null;
                treemap.leafItemSettings.colorMapping[0].maxOpacity = null;
                treemap.leafItemSettings.colorMapping[1].value = null;
                treemap.leafItemSettings.colorMapping[2].value = null;
                treemap.leafItemSettings.colorMapping[0].label = '0.1M - 0.25M';
                treemap.leafItemSettings.colorMapping[0].color = '#547C84';
                treemap.leafItemSettings.colorMapping[1].from = 250000;
                treemap.leafItemSettings.colorMapping[1].to = 500000;
                treemap.leafItemSettings.colorMapping[1].label = '0.25M - 0.50M';
                treemap.leafItemSettings.colorMapping[1].color = '#37AFAB';
                treemap.leafItemSettings.colorMapping[2].from = 500000;
                treemap.leafItemSettings.colorMapping[2].to = 750000;
                treemap.leafItemSettings.colorMapping[2].label = '0.5M - 0.75M';
                treemap.leafItemSettings.colorMapping[2].color = '#A4D6AD';
                treemap.leafItemSettings.colorMapping[2].value = null;
                treemap.leafItemSettings.colorMapping[3].from = 750000;
                treemap.leafItemSettings.colorMapping[3].to = 2200000;
                treemap.leafItemSettings.colorMapping[3].label = '0.75M - 2M';
                treemap.leafItemSettings.colorMapping[3].color = '#DEEBAE';
                treemap.leafItemSettings.colorMapping[4].from = null;
                treemap.leafItemSettings.colorMapping[3].value = null;
                treemap.leafItemSettings.colorMapping[4].to = null;
                treemap.leafItemSettings.colorMapping[4].label = null;
                treemap.leafItemSettings.colorMapping[4].value = null;
                treemap.leafItemSettings.colorMapping[4].color = null;
                treemap.leafItemSettings.colorMapping[5].to = null;
                treemap.leafItemSettings.colorMapping[5].label = null;
                treemap.leafItemSettings.colorMapping[5].value = null;
                treemap.leafItemSettings.colorMapping[5].color = null;
                treemap.leafItemSettings.colorMapping[5].from = null;
                treemap.legendSettings.title.text = 'Area';
                treemap.refresh();
            }
            else if (element === 'EqualColorMapping') {
                document.getElementById('text1').style.display = 'none';
                document.getElementById('input1').style.display = 'none';
                document.getElementById('text2').style.display = 'none';
                document.getElementById('input2').style.display = 'none';
                document.getElementById('text3').style.display = 'none';
                document.getElementById('input3').style.display = 'none';
                treemap.rangeColorValuePath = null;
                treemap.leafItemSettings.colorMapping[0].from = null;
                treemap.leafItemSettings.colorMapping[0].to = null;
                treemap.leafItemSettings.colorMapping[0].label = null;
                treemap.leafItemSettings.colorMapping[1].label = null;
                treemap.leafItemSettings.colorMapping[2].label = null;
                treemap.leafItemSettings.colorMapping[3].label = null;
                treemap.leafItemSettings.colorMapping[4].label = null;
                treemap.leafItemSettings.colorMapping[0].value = 'North America';
                treemap.leafItemSettings.colorMapping[0].color = '#DEEBAE';
                treemap.leafItemSettings.colorMapping[1].from = null;
                treemap.leafItemSettings.colorMapping[1].to = null;
                treemap.leafItemSettings.colorMapping[1].value = 'Oceania';
                treemap.leafItemSettings.colorMapping[1].color = '#A4D6AD';
                treemap.leafItemSettings.colorMapping[2].from = null;
                treemap.leafItemSettings.colorMapping[2].to = null;
                treemap.leafItemSettings.colorMapping[2].value = 'Asia';
                treemap.leafItemSettings.colorMapping[2].color = '#37AFAB';
                treemap.leafItemSettings.colorMapping[3].from = null;
                treemap.leafItemSettings.colorMapping[3].to = null;
                treemap.leafItemSettings.colorMapping[3].value = 'Africa';
                treemap.leafItemSettings.colorMapping[3].color = '#547C84';
                treemap.leafItemSettings.colorMapping[4].from = null;
                treemap.leafItemSettings.colorMapping[4].to = null;
                treemap.leafItemSettings.colorMapping[4].value = 'Europe';
                treemap.leafItemSettings.colorMapping[4].color = '#CEBF93';
                treemap.leafItemSettings.colorMapping[0].minOpacity = null;
                treemap.leafItemSettings.colorMapping[0].maxOpacity = null;
                treemap.leafItemSettings.colorMapping[1].minOpacity = null;
                treemap.leafItemSettings.colorMapping[1].maxOpacity = null;
                treemap.leafItemSettings.colorMapping[2].minOpacity = null;
                treemap.leafItemSettings.colorMapping[2].maxOpacity = null;
                treemap.leafItemSettings.colorMapping[3].minOpacity = null;
                treemap.leafItemSettings.colorMapping[3].maxOpacity = null;
                treemap.leafItemSettings.colorMapping[4].minOpacity = null;
                treemap.leafItemSettings.colorMapping[4].maxOpacity = null;
                treemap.equalColorValuePath = 'Location';
                treemap.legendSettings.title.text = 'Continent';
                treemap.refresh();
            }
            else if (element === 'DesaturationColorMapping') {
                document.getElementById('text1').style.display = 'block';
                document.getElementById('input1').style.display = 'block';
                treemap.rangeColorValuePath = 'Area';
                treemap.equalColorValuePath = null;
                var minOpacity = document.getElementById('minopacity');
                var maxOpacity = document.getElementById('maxopacity');
                treemap.leafItemSettings.colorMapping[2].from = null;
                treemap.leafItemSettings.colorMapping[2].to = null;
                treemap.leafItemSettings.colorMapping[1].from = null;
                treemap.leafItemSettings.colorMapping[1].to = null;
                treemap.leafItemSettings.colorMapping[1].label = null;
                treemap.leafItemSettings.colorMapping[3].from = null;
                treemap.leafItemSettings.colorMapping[3].to = null;
                treemap.leafItemSettings.colorMapping[0].from = 100000;
                treemap.leafItemSettings.colorMapping[0].to = 2230800;
                treemap.leafItemSettings.colorMapping[0].label = '0.1M - 2M';
                treemap.leafItemSettings.colorMapping[0].value = null;
                treemap.leafItemSettings.colorMapping[1].value = null;
                treemap.leafItemSettings.colorMapping[2].value = null;
                treemap.leafItemSettings.colorMapping[3].value = null;
                treemap.leafItemSettings.colorMapping[2].color = null;
                treemap.leafItemSettings.colorMapping[1].color = null;
                treemap.leafItemSettings.colorMapping[3].color = null;
                treemap.leafItemSettings.colorMapping[0].color = ['#F0D6AD', '#19547B'];
                if (highlightCheckBox.checked) {
                    document.getElementById('text2').style.display = 'block';
                    document.getElementById('input2').style.display = 'block';
                    document.getElementById('text3').style.display = 'block';
                    document.getElementById('input3').style.display = 'block';
                    treemap.leafItemSettings.colorMapping[0].minOpacity = parseFloat(minOpacity.value);
                    treemap.leafItemSettings.colorMapping[0].maxOpacity = parseFloat(maxOpacity.value);
                }
                else {
                    treemap.leafItemSettings.colorMapping[0].minOpacity = null;
                    treemap.leafItemSettings.colorMapping[0].maxOpacity = null;
                }
                treemap.legendSettings.title.text = 'Area';
                treemap.refresh();
            }
        }
    });
    sampleValue.appendTo('#colorMapping');
