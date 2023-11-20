import { Injectable } from '@angular/core';
import { NbToastrService } from '@nebular/theme';

// Definir un tipo que enumera los tipos válidos de notificación.
type NotificationType = "success" | "info" | "warning" | "danger";

@Injectable({
  providedIn: 'root'
})

export class NotificationsService {

  // Constructor de la clase que recibe un servicio de notificación (NbToastrService).
  constructor(public _toast: NbToastrService) { }

  // Función para mostrar notificaciones.
  // Recibe el tipo de notificación, el mensaje y el título.
  show(type: NotificationType, message: string, title: string): void {
    // Verificar si el tipo de notificación es válido.
    if (this.isValidNotificationType(type)) {
      // Usar el tipo directamente para acceder al método adecuado en NbToastrService.
      this._toast[type](title, message);
    } else {
      // Manejar un tipo de notificación por defecto o mostrar un mensaje de error si el tipo no es válido.
      console.error("Tipo de notificación no válido");
      this._toast.default(title, message);
    }
  }

  // Función para verificar si el tipo de notificación es uno de los tipos válidos.
  private isValidNotificationType(type: string): type is NotificationType {
    // Verificar si el tipo de notificación está en la lista de tipos válidos.
    return ["success", "info", "warning", "danger"].includes(type);
  }

}
