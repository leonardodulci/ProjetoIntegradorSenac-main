<?php
require 'connect.php'; 

class Funcionarios {
    private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    // Create
    public function create($matricula, $nome, $sobrenome, $cpf, $email) {
        $sql = "INSERT INTO funcionarios (matricula, nome, sobrenome, cpf, email) VALUES (?, ?, ?, ?, ?)";
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute([$matricula, $nome, $sobrenome, $cpf, $email]);
    }

    // Read
    public function read($id = null) {
        if ($id) {
            $sql = "SELECT * FROM funcionarios WHERE id_funcionario = ?";
            $stmt = $this->pdo->prepare($sql);
            $stmt->execute([$id]);
            return $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $sql = "SELECT * FROM funcionarios";
            return $this->pdo->query($sql)->fetchAll(PDO::FETCH_ASSOC);
        }
    }

    // Update
    public function update($id, $matricula, $nome, $sobrenome, $cpf, $email) {
        $sql = "UPDATE funcionarios SET matricula = ?, nome = ?, sobrenome = ?, cpf = ?, email = ? WHERE id_funcionario = ?";
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute([$matricula, $nome, $sobrenome, $cpf, $email, $id]);
    }

    // Delete
    public function delete($id) {
        $sql = "DELETE FROM funcionarios WHERE id_funcionario = ?";
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute([$id]);
    }
}
?>