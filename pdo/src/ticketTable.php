<?php
require 'connect.php'; 

class Ticket {
    private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    // Create
    public function create($id_veiculo, $hora_entrada, $hora_saida) {
        $sql = "INSERT INTO ticket (id_veiculo, hora_entrada, hora_saida) VALUES (?, ?, ?)";
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute([$id_veiculo, $hora_entrada, $hora_saida]);
    }

    // Read
    public function read($id = null) {
        if ($id) {
            $sql = "SELECT * FROM ticket WHERE id_ticket = ?";
            $stmt = $this->pdo->prepare($sql);
            $stmt->execute([$id]);
            return $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $sql = "SELECT * FROM ticket";
            return $this->pdo->query($sql)->fetchAll(PDO::FETCH_ASSOC);
        }
    }

    // Update
    public function update($id, $id_veiculo, $hora_entrada, $hora_saida) {
        $sql = "UPDATE ticket SET id_veiculo = ?, hora_entrada = ?, hora_saida = ? WHERE id_ticket = ?";
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute([$id_veiculo, $hora_entrada, $hora_saida, $id]);
    }

    // Delete
    public function delete($id) {
        $sql = "DELETE FROM ticket WHERE id_ticket = ?";
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute([$id]);
    }
}
?>