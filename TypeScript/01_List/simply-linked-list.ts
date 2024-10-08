import { LinkedList } from "./list.interface";

export class ListNode<T> {
    public data: T
    public next?: ListNode<T>
}

export class List<T> implements LinkedList<T> {
  //Além dos métodos implementados da interface, temos os atributos head, tail e length, que serão utilizados pelos métodos da classe.
  private head?: ListNode<T>;
  private tail?: ListNode<T>;
  private length: number;

  //Cria uma lista vazia a partir dos atributos acima
  constructor() {
    this.head = undefined;
    this.tail = undefined;
    this.length = 0;
  }

  isEmpty(): boolean {
    return !this.head; //Se não possui topo, não há lista.
  }

  get(index: number): T | null | undefined {
    if (this.isEmpty() || index >= this.length) {
      return null;
    }
    let current = this.head; // Determina o valor atual do nó
    let i = 0;
    while (current && i < index) {
      current = current.next;
      i++;
    }
    return current?.data;
  }

    push(data: T): void {
      this.length++;
      // Determina o novo nó a ser adicionado
      const newNode = new ListNode<T>();
        newNode.data = data;
        // Determina o topo e fim da lista com esse nó, no caso de uma lista vazia.
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode; 
        } else {
            this.tail!.next = newNode;
            this.tail = newNode;
        }
    }

  pop(): T | undefined {
    if (this.isEmpty()) {
      return undefined; // Como não há elementos na lista, não há o que remover.
      }
      
      // Cria-se uma variável para o último elemento da lista, que será posteriormente manipulada.
      let elementToPop: T | undefined;

      // No caso de haver apenas um elemento
      if (this.head === this.tail) {
          elementToPop = this.head?.data;
          this.head = undefined;
          this.tail = undefined;
      } 
      // Nos demais casos, percorre a lista até encontrar os dados correspondentes ao elemento final da lista
      let current = this.head;
      
      while (current?.next !== this.tail) {
          current = current?.next
      }
      //Ao encontrar o elemento final, esvazia a referência do nó (que se igualou ao elemento final da lista) e diminui o tamanho da lista
      elementToPop = this.tail?.data;
      current!.next = undefined;
      this.tail = current;
      this.length--;

      return elementToPop

  }

  //Adiciona um elemento ao final da lista, igual ao push (no caso em que não trata-se de listas duplamente encadeadas)
  append(data: T | undefined): void {
    
  }

  removeTail(): T | undefined {
    throw new Error("Algo deu errado.");
  }
  insertAt(index: number, data: T): void {
    throw new Error("Algo deu errado.");
  }
  removeAt(index: number): T | undefined {
    throw new Error("Algo deu errado.");
  }
  clear(): void {}
  toArray(): (T | undefined)[] {
    throw new Error("Algo deu errado.");
  }
  getLength(): number {
    return this.length;
  }
}