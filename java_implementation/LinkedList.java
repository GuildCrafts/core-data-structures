package datastructures;

public class LinkedList {

  private Node head;
  private int length = 0;

  private class Node {
    private final Object data;
    private Node next;

    Node(Object data) {
      this.data = data;
    }
  }

  public Object getHeadNode() {
    return this.head.data;
  }

  public Object getTailNode() {
    Node currentNode = this.head;
    while (currentNode.next != null) {
      currentNode = currentNode.next;
    }
    return currentNode.data;
  }

  public Node insert(Object data) {
    Node node = new Node(data);
    if (this.head == null) {
      this.head = node;
      this.length++;
      return node;
    }
    Node currentNode = this.head;
    while (currentNode.next != null) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    this.length++;
    return node;
  }

  public int size() {
    return this.length;
  }
}