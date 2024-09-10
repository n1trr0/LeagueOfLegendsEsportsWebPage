function showStage(stageId) {
    const stages = document.querySelectorAll('.bracket-stage');
    
    // Ocultar todos los brackets
    stages.forEach(stage => {
        stage.style.display = 'none';
    });

    // Mostrar el bracket correspondiente
    document.getElementById(stageId).style.display = 'block';
}

// Mostrar por defecto la primera etapa al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    showStage('playins'); // Puedes cambiar esto a 'swiss' o 'knockout' si deseas
});