
    class Node{
        constructor(data, nextnode=null)
        {
            this.data=data;
            this.nextnode=nextnode;
        }
    }
    class LinkedList
    {
        constructor()
        {
            this.rootnode=null;
            this.size=0;
        }
        add(data)
        {
            this.rootnode=new Node(data,this.rootnode);
            this.size++;
        }
    }
        const l=new LinkedList();
        l.add(2);
    