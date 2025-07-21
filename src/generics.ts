class KeyVAluePair<K, V> {
  constructor(public key: K, public value: V) {}
}

let pair = new KeyVAluePair<string, number>("age", 30);

// GENERIC FUNCTIONS
