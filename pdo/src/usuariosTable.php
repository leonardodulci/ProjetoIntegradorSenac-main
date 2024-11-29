<?php
require 'connect.php'; 

class Usuarios {
    private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    // Create
    public function create($senha, $nome, $sobrenome, $cpf, $email, $telefone) {
        $sql = "INSERT INTO usuarios (senha, nome, sobrenome, cpf, email, telefone) VALUES (?, ?, ?, ?, ?, ?)";
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute([$senha, $nome, $sobrenome, $cpf, $email, $telefone]);
    }

    // Read
    public function read($id = null) {
        if ($id) {
            $sql = "SELECT * FROM usuarios WHERE id_usuario = ?";
            $stmt = $this->pdo->prepare($sql);
            $stmt->execute([$id]);
            return $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $sql = "SELECT * FROM usuarios";
            return $this->pdo->query($sql)->fetchAll(PDO::FETCH_ASSOC);
        }
    }

    // Update
    public function update($id, $senha, $nome, $sobrenome, $cpf, $email, $telefone) {
        $sql = "UPDATE usuarios SET senha = ?, nome = ?, sobrenome = ?, cpf = ?, email = ?, telefone = ? WHERE id_usuario = ?";
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute([$senha, $nome, $sobrenome, $cpf, $email, $telefone, $id]);
    }

    // Delete
    public function delete($id) {
        $sql = "DELETE FROM usuarios WHERE id_usuario = ?";
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute([$id]);
    }
}
?>