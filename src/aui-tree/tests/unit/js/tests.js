YUI.add('module-tests', function(Y) {

    var suite = new Y.Test.Suite('aui-tree');

    var createNewTreeView = function() {

        return new Y.TreeView({
            children: [
                {
                    children: [
                        {
                            id: 'one-one'
                        },
                        {
                            id: 'one-two'
                        },
                        {
                            id: 'one-three'
                        },
                        {
                            id: 'one-four'
                        }
                    ],
                    id: 'one'
                },
                {
                    id: 'two'
                },
                {
                    id: 'three'
                }
            ]
        });
    };

    suite.add(new Y.Test.Case({
        name: 'Tree View',

        'TreeView constructor should work without a config object': function() {
            var treeView = new Y.TreeView();

            Y.Assert.isInstanceOf(Y.TreeView, treeView, 'treeView should be an instance of Y.TreeView.');
        },

        'TreeNode constructor should work without a config object': function() {
            var treeNode = new Y.TreeNode();

            Y.Assert.isInstanceOf(Y.TreeNode, treeNode, 'treeNode should be an instance of Y.TreeNode.');
        },

        'getNodeById() should return a valid TreeNode': function() {
            var tree = createNewTreeView();

            var childNode = tree.getNodeById('one');

            Y.Assert.isInstanceOf(Y.TreeNode, childNode, 'childNode should be an instance of Y.TreeNode.');
        },

        'getNodeById() should not return a valid TreeNode': function() {
            var tree = createNewTreeView();

            var childNode = tree.getNodeById('bogey');

            Y.Assert.isUndefined(childNode, 'childNode should be undefined.');
        },

        'TreeNode should have children': function() {
            var tree = createNewTreeView();

            var node = tree.getNodeById('one');

            Y.Assert.areSame(4, node.childrenLength, 'node.childrenLength should return 4.');
        },

        'TreeNode should not have children': function() {
            var tree = createNewTreeView();

            var node = tree.getNodeById('two');

            Y.Assert.areSame(0, node.childrenLength, 'node.childrenLength should return 0.');
        },

        'appendChild() should regester the TreeNode in the Parent TreeNode and Owner TreeView index attribute': function() {
            var treeView = new Y.TreeView();

            var childTreeNode = new Y.TreeNode({
                id: 'child'
            });
            var rootTreeNode = new Y.TreeNode({
                id: 'root'
            });

            treeView.appendChild(rootTreeNode);
            rootTreeNode.appendChild(childTreeNode);

            var treeViewIndex = treeView.get("index");
            var rootTreeNodeIndex = rootTreeNode.get("index");

            Y.Assert.isTrue(
                treeViewIndex.hasOwnProperty('root'),
                'treeViewIndex object should have a "root" property');
            Y.Assert.isTrue(
                treeViewIndex.hasOwnProperty('child'),
                'treeViewIndex object should have a "child" property');
            Y.Assert.isTrue(
                rootTreeNodeIndex.hasOwnProperty('child'),
                'rootTreeNodeIndex object should have a "child" property');
        },

        'removeChild() should remove child TreeNode': function() {
            var tree = createNewTreeView();

            var node = tree.getNodeById('two');

            tree.removeChild(node);

            Y.Assert.areSame(2, tree.getChildrenLength(), 'rootNode should have 2 children.');

            node = tree.getNodeById('two');

            Y.Assert.isUndefined(node, 'node should be undefined.');

            Y.Assert.areSame('three', tree.getChildren()[1].get('id'), 'Second node id should be `three`.');
        },

        'removeChild() should not remove child TreeNode': function() {
            var tree = createNewTreeView();

            var node = tree.getNodeById('bogey');

            tree.removeChild(node);

            Y.Assert.areSame(3, tree.getChildrenLength(), 'rootNode should have 3 children');

            Y.Assert.areSame('three', tree.getChildren()[2].get('id'), 'second node id should be `three`');
        },

        'isRegistered() should find TreeNode': function() {
            var tree = createNewTreeView();

            var node = tree.getNodeById('two');

            Y.Assert.isTrue(tree.isRegistered(node), 'TreeNode should be registered in TreeView');
        },

        'isRegistered() should find child TreeNode': function() {
            var treeView = new Y.TreeView();

            var childTreeNode = new Y.TreeNode({
                id: 'child'
            });
            var rootTreeNode = new Y.TreeNode({
                id: 'root'
            });

            treeView.appendChild(rootTreeNode);
            rootTreeNode.appendChild(childTreeNode);

            Y.Assert.isTrue(
                treeView.isRegistered(childTreeNode),
                'childTreeNode should be registered in treeView');
            Y.Assert.isTrue(
                rootTreeNode.isRegistered(childTreeNode),
                'childTreeNode should be registered in Parent rootTreeNode');
        },

        'isRegistered() should not find TreeNode': function() {
            var tree = createNewTreeView();

            var node = new Y.TreeNode();

            Y.Assert.isFalse(tree.isRegistered(node), 'TreeNode should be registered in TreeView');
        },

        /**
         * @tests AUI-1141
         */
        'TreeNodeView created from HTML Markup should display icon-minus when expanded': function() {
            var test = this;

            var treeView = new Y.TreeView({
                boundingBox: treeViewComponent,
                contentBox: Y.one('#createFromHTMLMarkupTest > ul'),
                type: 'normal'
            }).render();

            var treeViewComponent = Y.one('#createFromHTMLMarkupTest');
            var allHitareas = treeViewComponent.all('.tree-container .tree-hitarea');

            setTimeout(function() {
                test.resume(function() {
                    Y.each(
                        allHitareas,
                        function(hitarea) {
                            Y.Assert.isTrue(
                                hitarea.hasClass('icon-minus'),
                                hitarea + ' does not have class icon-minus.');
                        }
                    );
                });
            }, 800);

            setTimeout(function() {
                treeViewComponent.one('.tree-root-container .tree-hitarea').simulate('click');

                Y.each(
                    allHitareas,
                    function(hitarea) {
                        hitarea.simulate('click');
                    }
                );
            });

            test.wait(1000);
        },

        'TreeNodeView created from HTML Markup should display icon-plus when collapsed': function() {
            var test = this;
            var treeViewComponent = Y.one('#createFromHTMLMarkupTest');

            var allTreeHitareas = treeViewComponent.all('.tree-container .tree-hitarea');
            var treeHitareasArray = [];

            Y.each(
                allTreeHitareas,
                function(hitarea) {
                    treeHitareasArray.push(hitarea);
                }
            );

            setTimeout(function() {
                test.resume(function() {
                    for (var i = treeHitareasArray.length; i--;) {
                        Y.Assert.isTrue(treeHitareasArray[i].hasClass('icon-plus'),
                            treeHitareasArray[i] + ' does not have class icon-plus');
                    }
                });
            }, 800);

            setTimeout(function() {
                for (var i = treeHitareasArray.length; i--;) {
                    treeHitareasArray[i].simulate('click');
                }
            });

            test.wait(1000);
        },

        /**
         * @tests AUI-1156
         */
        'Display "Load More Results" link for TreeNodes': function() {
            var childTreeNode,
                rootTreeNode,
                treeView;

             treeView = new Y.TreeView();

            childTreeNode = [
                {
                    id: 'child-one',
                    io: 'assets/pages.html',
                    label: 'child-one',
                    paginator: {
                        limit: 3,
                        offsetParam: 'start',
                        start: 0,
                        total: 6
                    },
                    type: 'io'
                },
                { label: 'child-two' },
                { label: 'child-three' },
                { label: 'child-four' }
            ];

            rootTreeNode = new Y.TreeNode(
                {
                    children: childTreeNode,
                    id: 'root-one',
                    label: 'root-one',
                }
            );

            treeView.appendChild(rootTreeNode);

            var rootTreeNodeCB = rootTreeNode.get('contentBox');

            var allTreeHitareas = rootTreeNodeCB.all('.tree-container .tree-hitarea');
            var treeHitareasArray = [];

            Y.each(
                allTreeHitareas,
                function(hitarea) {
                    treeHitareasArray.push(hitarea);
                }
            );

            setTimeout(function() {
                for (var i = treeHitareasArray.length; i--;) {
                    treeHitareasArray[i].simulate('click');
                }
            });

            var paginatorLink = allTreeHitareas.one('a');

            Y.Assert.isTrue(
                paginatorLink.hasClass('tree-node-paginator'),
                'childTreeNode has a paginator link');

            paginatorLink.simulate('click');

            var childTreeNodes = rootTreeNodeCB.all('.tree-container .tree-container li');

            Y.Assert.areSame(6, childTreeNodes.size(), 'childTreeNodes should have 6 children');
        }
    }));

    Y.Test.Runner.add(suite);

}, '', {
    requires: ['aui-tree', 'node-event-simulate', 'test']
});
