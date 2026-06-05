//
//  MenuCaloriesApp.swift
//  MenuCalories
//
//  Created by Saltanat Seymuhan on 31.03.2026.
//

import SwiftUI
import CoreData

@main
struct MenuCaloriesApp: App {
    let persistenceController = PersistenceController.shared

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environment(\.managedObjectContext, persistenceController.container.viewContext)
        }
    }
}
