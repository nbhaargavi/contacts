class Node{
    constructor(phno,email,name,nextnode=null)
    {
        this.phno=phno;
        this.email=email;
        this.name=name;
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
    add(phno,email,name)
    {
       let nn=new Node(phno,email,name);
       if(this.rootnode==null)
       {
        this.rootnode=nn;
       }
       else{
        let temp=this.rootnode;
        while(temp.nextnode!=null)
        {
            temp=temp.nextnode;
        }
        temp.nextnode=nn;
       }
       this.size++;
    }
    del(no)
    {
        let temp=this.rootnode;
        let prenode=this.rootnode;
        if(this.rootnode.phno==no)
        {
            this.rootnode=this.rootnode.nextnode;
        }
        else{
        while(temp.nextnode!=null && temp.phno!=no)
        {
            prenode=temp;
            temp=temp.nextnode;
        }
        prenode.nextnode=temp.nextnode;
    }
    this.size--;
}
    search(no)
    {
            let temp = this.rootnode;
                while(temp.nextnode!=null && temp.phno!=no){
              temp = temp.nextnode;
            }
            if (temp.phno == no) {
              return temp.phno;
            }
            else{
                return "Not found";
            }
          }        
    print()
    {
    let temp=this.rootnode;
        while(temp){
            console.log(temp.phno,temp.email,temp.name);
            temp = temp.nextnode;
        }
}
}
    const l=new LinkedList();
    l.add(8220826174,"nbhaargavi18@gmail.com","Bhaargavi");
    l.add(9287456837,"john7@gmail.com","John");
    l.add(1234567890,"dev@gmail.com","John");
    l.add(1234567899,"john7@gmail.com","John");
    l.del(8220826174);
    console.log(l.search(123456789));
    l.print();
   