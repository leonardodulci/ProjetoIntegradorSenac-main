<?php
require 'connect.php'; 

class Veiculos {
    private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    // Create
    public function create($id_usuario, $placa, $cor, $marca_modelo, $tipo_veiculo) {
        $sql = "INSERT INTO veiculos (id_usuario, placa, cor, marca_modelo, tipo_veiculo) VALUES (?, ?, ?, ?, ?)";
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute([$id_usuario, $placa, $cor, $marca_modelo, $tipo_veiculo]);
    }

    // Read
    public function read($id = null) {
        if ($id) {
            $sql = "SELECT * FROM veiculos WHERE id_veiculo = ?";
            $stmt = $this->pdo->prepare($sql);
            $stmt->execute([$id]);
            return $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $sql = "SELECT * FROM veiculos";
            return $this->pdo->query($sql)->fetchAll(PDO::FETCH_ASSOC);
        }
    }

    // Update
    public function update($id, $id_usuario, $placa, $cor, $marca_modelo, $tipo_veiculo) {
        $sql = "UPDATE veiculos SET id_usuario = ?, placa = ?, cor = ?, marca_modelo = ?, tipo_veiculo = ? WHERE id_veiculo = ?";
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute([$id_usuario, $placa, $cor, $marca_modelo, $tipo_veiculo, $id]);
    }

    // Delete
    public function delete($id) {
        $sql = "DELETE FROM veiculos WHERE id_veiculo = ?";
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute([$id]);
    }
}
?>